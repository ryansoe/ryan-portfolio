"use client";

interface AnimatedUnderlineProps {
  children?: React.ReactNode;
  className?: string;
}

export const AnimatedUnderline = ({
  children = "Hover me",
  className = "",
}: AnimatedUnderlineProps) => {
  return (
    <span
      className={`relative inline-block after:absolute after:bg-black after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 ${className}`}
    >
      {children}
    </span>
  );
};
