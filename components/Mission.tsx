export default function Mission() {
  const values = [
    {
      title: "DISCIPLINE",
      description: "Strength through structure."
    },
    {
      title: "LOYALTY",
      description: "Trust is earned. Betrayal is not forgiven."
    },
    {
      title: "UNITY",
      description: "One vision. One family. One Order."
    },
    {
      title: "EXCELLENCE",
      description: "We do not follow standards. We set them."
    }
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center mb-16">

        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
          Our Mission
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          The Foundation of the Order
        </h2>

      </div>

      <div className="grid md:grid-cols-4 gap-6">

        {values.map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl
              border
              border-purple-800
              bg-black/40
              backdrop-blur-md
              p-8
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,.4)]
              transition
            "
          >
            <h3 className="text-purple-300 font-bold text-xl">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}