import Link from "next/link";
import React from "react";

interface RedirectorProps {
  redirectorText: string;
  redirectorTheme: string;
  redirectorPath: string;
  target?: string;
  className?: string;
}

const Redirector: React.FC<RedirectorProps> = (props) => {
  return (
    <Link
      href={props.redirectorPath}
      target={props.target}
      className={`font-semibold py-2 px-4 rounded text-[0.8rem] ${
        props.redirectorTheme === "dark"
          ? "bg-[#29903B] hover:bg-green-600 text-white"
          : "bg-white text-black hover:bg-slate-200"
      } ${props.className}`}
    >
      {props.redirectorText}
    </Link>
  );
};

export default Redirector;
