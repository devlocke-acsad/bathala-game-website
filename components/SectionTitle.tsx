interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="font-display text-lg sm:text-xl md:text-2xl tracking-wider text-foreground mb-4 leading-relaxed">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">{subtitle}</p>
      )}
      <div className="pixel-divider mt-6 max-w-md mx-auto">
        <span className="text-gold text-xs font-display">◆</span>
      </div>
    </div>
  );
};

export default SectionTitle;
