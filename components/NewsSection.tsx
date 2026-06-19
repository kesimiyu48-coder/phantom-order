export default function NewsSection() {
  const news = [
    {
      title: "Departmental Announcements Protocol",
      date: "June 2026",
      description:
        "All departments are required to publish official communications through their designated announcement channels.",
    },
    {
      title: "Promotion Tasks Active",
      date: "June 2026",
      description:
        "Members seeking promotion must complete assigned objectives and submit evidence before deadlines.",
    },
    {
      title: "Recruitment Drive",
      date: "June 2026",
      description:
        "The Order is seeking active and dedicated recruits to strengthen its ranks.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
          Intelligence Feed
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          News & Announcements
        </h2>
      </div>

      <div className="space-y-6">
        {news.map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl
              border
              border-purple-800
              bg-black/40
              backdrop-blur-md
              p-6
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,.4)]
              transition
            "
          >
            <div className="text-purple-400 text-sm">
              {item.date}
            </div>

            <h3 className="mt-2 text-xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}