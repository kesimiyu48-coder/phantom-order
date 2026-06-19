export default function RankSection() {
  const ranks = [
    "Initiate",
    "Phantom",
    "Knight",
    "Captain",
    "Sentinel",
    "Warden",
    "High Warden",
    "Marshal",
    "Sovereign",
    "Curator",
  ];

  return (
    <section
      id="ranks"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center mb-16">

        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
          Chain Of Command
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Rank Structure
        </h2>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {ranks.map((rank, index) => (
          <div
            key={rank}
            className="
              rounded-2xl
              border
              border-purple-800
              bg-black/40
              backdrop-blur-md
              p-6
              text-center
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,.5)]
              transition
            "
          >
            <div className="text-purple-400 text-sm mb-2">
              RANK {index + 1}
            </div>

            <h3 className="font-bold text-lg">
              {rank}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}