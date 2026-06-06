type SectionTitleProps = {
  label: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionTitle({ label, title, lead, align = "left" }: SectionTitleProps) {
  return (
    <div className={`fade-up relative mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="section-tag mb-4">{label}</p>
      <h2 className="font-display text-3xl font-black leading-[1.45] tracking-tight text-text sm:text-5xl">{title}</h2>
      {lead ? (
        <p className={`mt-5 text-[15px] leading-8 text-text/70 sm:text-base ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
