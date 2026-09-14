"use client";

import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { Download, ExternalLink, FileText, Loader2, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";

const PdfViewer = () => {
  console.log('pdf-viewer.tsx rendered!');
  const resumeUrl = "/resume.pdf";
  const [scale, setScale] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pdfDocRef = useRef<any>(null);
  const renderTaskRef = useRef<any>(null);

  const drawPage = useCallback(async (doc: any, currentScale: number) => {
    if (!doc || !canvasRef.current || !containerRef.current) return;

    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
      renderTaskRef.current = null;
    }

    try {
      const page = await doc.getPage(1);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;

      const baseViewport = page.getViewport({ scale: 1.0 });
      const containerStyle = window.getComputedStyle(containerRef.current);
      const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(containerStyle.paddingRight) || 0;
      const availableWidth = Math.floor(containerRef.current.getBoundingClientRect().width - paddingLeft - paddingRight);

      const fitScale = (availableWidth > 0 ? availableWidth : 800) / baseViewport.width;
      const finalScale = fitScale * currentScale;
      const viewport = page.getViewport({ scale: finalScale });

      const outputScale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

      const renderContext = {
        canvasContext: context,
        viewport,
      };

      const task = page.render(renderContext);
      renderTaskRef.current = task;
      await task.promise;
      setIsLoading(false);
    } catch (err: any) {
      if (err?.name !== "RenderingCancelledException") {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const initPdf = async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument({
          url: resumeUrl,
          cMapPacked: true,
        });

        const doc = await loadingTask.promise;
        if (isCancelled) return;
        pdfDocRef.current = doc;
        await drawPage(doc, scale);
      } catch (err) {
        console.error(err);
      }
    };

    initPdf();

    let animationFrameId: number;
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (pdfDocRef.current) {
          drawPage(pdfDocRef.current, scale);
        }
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [drawPage, scale]);

  useEffect(() => {
    if (pdfDocRef.current) {
      drawPage(pdfDocRef.current, scale);
    }
  }, [scale, drawPage]);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(Number((prev + 0.1).toFixed(2)), 2.0));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(Number((prev - 0.1).toFixed(2)), 0.6));
  }, []);

  return (
    <section className="flex flex-col w-full max-w-full mt-4 content-auto">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-6 rounded-full bg-accent-primary" />
        <h2 className="text-slate-900 dark:text-slate-100 text-title font-bold tracking-tight break-words">
          Resume
        </h2>
      </div>

      <div className="w-full max-w-full border border-slate-200 dark:border-border-primary rounded-t-xl bg-white dark:bg-bg-primary p-3 lg:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent-primary shrink-0" />
            <span className="text-body font-semibold text-slate-800 dark:text-slate-200">
              resume.pdf
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
            <div className="flex items-center bg-slate-100 dark:bg-bg-card border border-slate-200 dark:border-border-primary rounded-lg p-1 text-caption">
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= 0.6 || isLoading}
                className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 text-slate-700 dark:text-slate-300 font-semibold">
                {Math.round(scale * 100)}%
              </span>
              <button
                type="button"
                onClick={zoomIn}
                disabled={scale >= 2.0 || isLoading}
                className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
            <a
              href={resumeUrl}
              download="Lakshya_Mahawar_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-primary hover:bg-accent-hover text-black text-caption font-semibold rounded-lg shadow-xs cursor-pointer"
              aria-label="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`relative w-full max-w-full bg-slate-100 dark:bg-bg-secondary border-x border-b border-slate-200 dark:border-border-primary rounded-b-xl p-4 sm:p-6 text-left overflow-y-hidden ${
          scale > 1.0 ? "overflow-x-auto" : "overflow-x-hidden"
        } ${isLoading ? "h-[200px] min-h-[200px]" : "h-auto"}`}
      >
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-slate-100 dark:bg-bg-secondary">
            <Loader2 className="w-6 h-6 animate-spin text-accent-primary" />
            <span className="text-caption font-medium text-slate-600 dark:text-slate-400">
              Loading document...
            </span>
          </div>
        )}

        <div className="w-fit min-w-full inline-block origin-top-left align-top">
          <canvas
            ref={canvasRef}
            className={`shadow-xs rounded-sm bg-white block ${
              isLoading ? "hidden" : "block"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(PdfViewer);