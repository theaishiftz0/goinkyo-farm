type SectionTitleProps = {
  label: string;
  title: string;
  lead?: string;
};

export default function SectionTitle({ label, title, lead }: SectionTitleProps) {
  return (
    <div className="reveal relative mb-12">
      <p className="mb-2 text-sm font-bold tracking-[0.28em] text-primary">{label}</p>
      <h2 className="text-3xl font-bold leading-tight text-text sm:text-5xl">{title}</h2>
      {lead ? <p className="mt-6 max-w-2xl text-base leading-8 text-text/66">{lead}</p> : null}
    </div>
  );
}
