interface Props {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export default function FadeInOnLoad({ delay = 0, children, className }: Props) {
  return (
    <div
      className={`page-load-animate${className ? ` ${className}` : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
