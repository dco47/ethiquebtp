type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-500 ${className}`}
    >
      {children}
    </span>
  );
}
