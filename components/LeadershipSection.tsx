export default function LeadershipSection() {
  const leaders = [
    {
      title: "Chief Curator Administration",
      name: "Owen Blake",
    },
    {
      title: "Chief Curator Intelligence",
      name: "Kai Saint",
    },
    {
      title: "Department Directors",
      name: "Division Leadership",
    },
    {
      title: "Field Commanders",
      name: "Operational Leaders",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
          Leadership
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          High Command
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((leader) => (
          <div
            key={leader.title}
            className="
              rounded-2xl
              border
              border-purple-800
              bg-black/40
              backdrop-blur-md
              p-8
              text-center
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,.5)]
              transition
            "
          >
            <h3 className="text-purple-300 font-bold text-xl">
              {leader.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {leader.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}