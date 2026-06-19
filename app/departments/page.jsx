import Link from "next/link";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400 tracking-widest">
          DEPARTMENTS
        </h1>
        <p className="text-gray-400 mt-4">
          STRUCTURE OF THE PHANTOM ORDER
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* ADMINISTRATION */}
        <div className="border border-purple-800 bg-black/50 p-6 rounded-xl hover:border-purple-500 transition">
          <h2 className="text-xl font-bold text-purple-300">
            ADMINISTRATION
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Handles internal coordination, structure, and governance of the Order.
          </p>
        </div>

        {/* INTERNAL AFFAIRS */}
        <div className="border border-purple-800 bg-black/50 p-6 rounded-xl hover:border-purple-500 transition">
          <h2 className="text-xl font-bold text-purple-300">
            INTERNAL AFFAIRS
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Maintains discipline, member conduct, and internal security.
          </p>
        </div>

        {/* OPERATIONS & SECURITY */}
        <div className="border border-purple-800 bg-black/50 p-6 rounded-xl hover:border-purple-500 transition">
          <h2 className="text-xl font-bold text-purple-300">
            OPERATIONS & SECURITY
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Executes missions and protects organizational integrity.
          </p>
        </div>

        {/* EVENTS */}
        <div className="border border-purple-800 bg-black/50 p-6 rounded-xl hover:border-purple-500 transition">
          <h2 className="text-xl font-bold text-purple-300">
            EVENTS
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Plans, coordinates, and executes Order-wide events and activities.
          </p>
        </div>

        {/* WAR DIVISION */}
        <div className="border border-purple-800 bg-black/50 p-6 rounded-xl hover:border-purple-500 transition">
          <h2 className="text-xl font-bold text-purple-300">
            WAR DIVISION
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Strategic planning, simulations, and tactical operations.
          </p>
        </div>

        {/* TREASURY */}
        <div className="border border-purple-800 bg-black/50 p-6 rounded-xl hover:border-purple-500 transition">
          <h2 className="text-xl font-bold text-purple-300">
            TREASURY
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Manages resources, funding, and financial systems of the Order.
          </p>
        </div>

      </div>

      {/* BACK LINK */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="text-purple-400 hover:underline"
        >
          ← Return to Home
        </Link>
      </div>

    </div>
  );
}