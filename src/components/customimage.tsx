import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  height: number;
  width: number;
  priority: boolean;
  alt: string;
  className?: string;
}

const CustomImage: React.FC<ImageProps> = (props) => {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      priority={props.priority}
      alt={props.alt}
      className={`${props.className}`}
    />
  );
};

export default CustomImage;
