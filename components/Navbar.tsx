import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-purple-900/40 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Phantom Order Logo"
            width={40}
            height={40}
            className="drop-shadow-[0_0_15px_rgba(168,85,247,.8)]"
          />

          <h1 className="text-xl font-bold text-purple-400">
            PHANTOM ORDER
          </h1>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#about">Mission</a>
          <a href="#ranks">Ranks</a>
          <a href="#departments">Departments</a>
          <a href="#join">Join</a>
        </div>

      </div>
    </nav>
  );
}