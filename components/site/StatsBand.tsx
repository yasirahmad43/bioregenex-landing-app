const stats = [
  { value: "16+", label: "Years of cellular research" },
  { value: "100B+", label: "Exosomes per dose" },
  { value: "30–150nm", label: "Signaling vesicle size" },
  { value: "cGMP", label: "U.S. manufactured" },
];

export default function StatsBand() {
  return (
    <section className="bg-ink">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4 md:py-14">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-4xl font-medium text-teal md:text-5xl">
              {s.value}
            </div>
            <div className="mx-auto mt-2 max-w-[9rem] text-sm leading-snug text-[#bcd0e6]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
