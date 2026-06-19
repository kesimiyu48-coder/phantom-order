export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/phantom-bg.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Purple Core Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,.35),transparent_60%)]" />

      {/* Animated Grid */}
      <div
        className="
          absolute inset-0 opacity-10
          bg-[linear-gradient(rgba(168,85,247,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.25)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <p className="mb-4 text-purple-300 tracking-[0.5em] uppercase text-sm md:text-base">
          Initiative Classified
        </p>

        <h1
          className="
            font-[var(--font-orbitron)]
            text-3xl
            md:text-5xl
            lg:text-6xl
            font-black
            tracking-[0.25em]
            text-transparent
            bg-gradient-to-r
            from-purple-200
            via-purple-400
            to-purple-200
            bg-clip-text
            drop-shadow-[0_0_50px_rgba(168,85,247,1)]
          "
        >
          PHANTOM ORDER
        </h1>

        <p
          className="
            mt-6
            text-lg
            md:text-2xl
            tracking-[0.3em]
            text-purple-200
          "
        >
          POWER • LOYALTY • LEGACY
        </p>

        <p
          className="
            mt-8
            text-gray-300
            max-w-2xl
            mx-auto
            text-lg
          "
        >
          A unified order built upon discipline,
          strategy, leadership, and unwavering loyalty.
          Every member serves a purpose.
          Every action shapes the future.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#join"
            className="
              rounded-xl
              border
              border-purple-500
              bg-purple-500/20
              px-8
              py-3
              font-semibold
              hover:bg-purple-700
              hover:shadow-[0_0_30px_rgba(168,85,247,.8)]
              transition
            "
          >
            JOIN THE ORDER
          </a>

          <a
            href="#departments"
            className="
              rounded-xl
              border
              border-purple-500
              px-8
              py-3
              font-semibold
              hover:bg-purple-700
              hover:shadow-[0_0_30px_rgba(168,85,247,.8)]
              transition
            "
          >
            EXPLORE
          </a>

        </div>

        {/* Command Terminal */}
        <div className="mt-14 mx-auto max-w-lg rounded-2xl border border-purple-800 bg-black/50 p-5 backdrop-blur-md">

          <div className="flex justify-between text-xs text-purple-400">
            <span>NETWORK STATUS</span>
            <span>ONLINE</span>
          </div>

          <div className="mt-4 h-px bg-purple-800" />

          <div className="mt-4 space-y-2 text-left text-sm">

            <p className="text-green-400">
              ● CORE SYSTEMS ACTIVE
            </p>

            <p className="text-green-400">
              ● DEPARTMENTS SYNCHRONIZED
            </p>

            <p className="text-green-400">
              ● CLEARANCE LEVEL: OMEGA
            </p>

            <p className="text-purple-300">
              PHANTOM ORDER COMMAND NODE READY
            </p>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce text-purple-400 text-sm tracking-widest">
          ▼ SCROLL ▼
        </div>

      </div>
    </section>
  );
}