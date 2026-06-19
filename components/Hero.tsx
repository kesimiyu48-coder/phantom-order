export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/phantom-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <p className="mb-4 text-purple-300 tracking-[0.4em] uppercase text-sm md:text-base">
          Initiative Classified
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            text-purple-300
            drop-shadow-[0_0_40px_rgba(168,85,247,1)]
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
          INVISIBLE • UNYIELDING • ORDER
        </p>

        <p
          className="
            mt-8
            text-gray-300
            max-w-2xl
            mx-auto
          "
        >
          We are the unseen force.
          We do not seek power.
          We execute purpose.
          Bound by loyalty, discipline, and unity.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            className="
              rounded-xl
              border
              border-purple-500
              bg-purple-500/10
              px-8
              py-3
              font-semibold
              hover:bg-purple-700
              hover:shadow-[0_0_30px_rgba(168,85,247,.8)]
              transition
            "
          >
            JOIN THE ORDER
          </button>

          <button
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
          </button>

        </div>

        {/* Status Panel */}
        <div className="mt-12 mx-auto max-w-md rounded-xl border border-purple-800 bg-black/40 p-4 backdrop-blur-md">
          <p className="text-purple-300 text-sm">
            SYSTEM STATUS: ONLINE
          </p>
          <p className="text-gray-400 text-xs mt-2">
            P.O. PROTOCOL // 7A
          </p>
          <p className="text-gray-400 text-xs">
            CLEARANCE: OMEGA
          </p>
        </div>

      </div>
    </section>
  );
}