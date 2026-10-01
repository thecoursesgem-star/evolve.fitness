export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-volt py-4 -rotate-1 scale-[1.02] my-4">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display text-ink text-2xl md:text-3xl uppercase tracking-wide flex items-center gap-8"
          >
            {item} <span className="text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
