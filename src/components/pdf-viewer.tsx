"use client";

import { useState, useEffect, useMemo, type ComponentType } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Link from "next/link";

interface ReactPdfComponents {
  Document: ComponentType<any>;
  Page: ComponentType<any>;
}

const PdfViewer = () => {
  const resumeUrl = "/resume.pdf";
  const [pdfComponents, setPdfComponents] = useState<ReactPdfComponents | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  useEffect(() => {
    import("react-pdf").then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
      setPdfComponents({
        Document: mod.Document,
        Page: mod.Page,
      });
    });
  }, []);

  const pdfOptions = useMemo(
    () => ({
      cMapPacked: true,
      disableRange: true,
      disableStream: true,
    }),
    []
  );

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.15, 2.0));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.15, 0.6));

  if (!pdfComponents) {
    return (
      <div className="w-full h-[600px] lg:h-[650px] rounded-xl bg-slate-100 dark:bg-slate-900 mt-4 lg:mt-6 border border-slate-200 dark:border-slate-800" />
    );
  }

  const { Document, Page } = pdfComponents;

  return (
    <section className="flex flex-col w-full mt-4 content-auto">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-6 rounded-full bg-indigo-500" />
        <h2 className="text-slate-900 dark:text-slate-100 text-[20px] font-bold tracking-tight">
          Curriculum Vitae
        </h2>
      </div>

      <div className="w-full border border-slate-200 dark:border-slate-800 rounded-t-xl bg-white dark:bg-[#111622] p-3 lg:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="text-[14px] font-semibold text-slate-800 dark:text-slate-200">
              resume.pdf
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-1 text-[12px]">
              <button
                onClick={zoomOut}
                disabled={scale <= 0.6}
                className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 text-slate-700 dark:text-slate-300 font-semibold select-none">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={scale >= 2.0}
                className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {numPages > 1 && (
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-1 text-[12px]">
                <button
                  onClick={prevPage}
                  disabled={pageNumber <= 1}
                  className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-slate-700 dark:text-slate-300 font-semibold select-none">
                  {pageNumber} / {numPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={pageNumber >= numPages}
                  className="p-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open Resume in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>

            <a
              href={resumeUrl}
              download="Lakshya_Mahawar_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-semibold rounded-lg shadow-xs cursor-pointer transition-colors"
              aria-label="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[500px] lg:min-h-[550px] max-h-[850px] overflow-auto bg-slate-100 dark:bg-[#07090e] border-x border-b border-slate-200 dark:border-slate-800 rounded-b-xl flex justify-center items-start p-2 sm:p-4">
        <Document
          file={resumeUrl}
          options={pdfOptions}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center py-20 text-indigo-500 text-[14px]">
              Loading document...
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center py-20 gap-2 text-slate-500 text-[14px]">
              <p>Unable to display PDF preview.</p>
              <a
                href={resumeUrl}
                download="Lakshya_Mahawar_Resume.pdf"
                className="underline text-[12px] text-indigo-500"
              >
                Download directly instead
              </a>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-sm rounded-lg overflow-hidden bg-white max-w-full"
          />
        </Document>
      </div>
    </section>
  );
};

export default PdfViewer;