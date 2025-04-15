import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-button-sm",
        "text-button-md",
        "text-button-lg",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-title",
      ],
    },
    conflictingClassGroups: {},
  },
});

export const cn = (...inputs: ClassValue[]) => customTwMerge(clsx(inputs));
// export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
