import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md border-b border-purple-900">

      {/* BRAND */}
      <div className="text-purple-400 font-bold tracking-widest text-lg">
        PHANTOM ORDER
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-3">

        {/* HOME */}
        <Link
          href="/"
          className="text-gray-300 hover:text-purple-400 transition"
        >
          Home
        </Link>

        {/* LOGIN */}
        <Link
          href="/login"
          className="px-4 py-2 border border-purple-700 rounded-lg hover:bg-purple-700/30 transition"
        >
          Login
        </Link>

        {/* SIGNUP */}
        <Link
          href="/signup"
          className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          Sign Up
        </Link>

        {/* 🔥 ADMIN LOGIN BUTTON (NEW) */}
        <Link
          href="/admin-login"
          className="px-4 py-2 border border-red-600 text-red-400 rounded-lg hover:bg-red-600/20 transition"
        >
          Admin
        </Link>

      </div>

    </nav>
  );
}