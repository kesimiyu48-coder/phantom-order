export default function JoinSection() {
  return (
    <section className="py-20 bg-black text-white text-center px-6">

      <h2 className="text-3xl md:text-5xl font-bold text-purple-400">
        JOIN THE NETWORK
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        Connect with Phantom Order across secure communication channels.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">

        {/* DISCORD */}
        <a
          href="https://discord.gg/nYzmMdPj4"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg"
        >
          JOIN DISCORD
        </a>

        {/* WHATSAPP */}
        <a
          href="https://chat.whatsapp.com/KW1WB9T1Bm2BxdZW29O5XY"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold shadow-lg"
        >
          JOIN WHATSAPP
        </a>

      </div>

    </section>
  );
}