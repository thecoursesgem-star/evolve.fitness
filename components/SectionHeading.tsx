import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  desc,
  align = "center",
}: {
  kicker: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p className="text-volt font-semibold tracking-[0.25em] uppercase text-xs mb-4">
        {kicker}
      </p>
      <h2 className="font-display text-4xl md:text-5xl uppercase leading-[1.05] mb-4">
        {title}
      </h2>
      {desc && <p className="text-white/60 leading-relaxed">{desc}</p>}
    </Reveal>
  );
}
