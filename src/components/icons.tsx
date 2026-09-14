import React, { memo } from "react";

console.log('icons.tsx rendered!');

export const GithubIcon = memo(({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={`w-5 h-5 block shrink-0 aspect-square ${className || ""}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
));

GithubIcon.displayName = "GithubIcon";

export const LinkedinIcon = memo(({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    className={`w-5 h-5 block shrink-0 aspect-square ${className || ""}`}
  >
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      d="M7.09 5.5a1.59 1.59 0 11-3.18 0 1.59 1.59 0 013.18 0zM3.91 8.5h3.18V19H3.91V8.5zm5.18 0h3.05v1.43h.04c.42-.8 1.46-1.64 3.01-1.64 3.22 0 3.81 2.12 3.81 4.88V19h-3.18v-5.14c0-1.23-.02-2.8-1.71-2.8-1.71 0-1.97 1.33-1.97 2.71V19H9.09V8.5z"
      fill="#FFFFFF"
    />
  </svg>
));

LinkedinIcon.displayName = "LinkedinIcon";