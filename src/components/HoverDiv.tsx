/** @format */

import { cn } from "../utils/cn";

export default function HoverDiv(
  props: React.HtmlHTMLAttributes<HTMLDivElement> & { isActive?: boolean }
) {
  return (
    <div
      {...props}
      className={cn(
        "py-2 px-3 hover:bg-zinc-800  transition-all cursor-pointer rounded-xl",
        { "bg-zinc-800": props.isActive },
        props.className
      )}
    />
  );
}
