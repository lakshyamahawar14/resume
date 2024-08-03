import React from "react";

interface TagProps {
  tag: string;
  className?: string;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <span
      className={`font-semibold w-auto px-4 py-2 dark:bg-[#161B22] border bg-white dark:text-slate-200 text-slate-700 text-[1rem] rounded-md ${props.className}`}
    >
      {props.tag}
    </span>
  );
};

export default Tag;
