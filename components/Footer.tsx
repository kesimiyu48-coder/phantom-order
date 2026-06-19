export default function Footer() {
  return (
    <footer className="border-t border-purple-900/40 bg-black/60 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold text-purple-400">
              PHANTOM ORDER
            </h3>

            <p className="mt-4 text-gray-400">
              Invisible. Unyielding. Order.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-purple-300">
              Navigation
            </h4>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#about">Mission</a></li>
              <li><a href="#ranks">Ranks</a></li>
              <li><a href="#departments">Departments</a></li>
              <li><a href="#join">Join</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-purple-300">
              Headquarters
            </h4>

            <p className="mt-4 text-gray-400">
              Official Portal of the Phantom Order
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-purple-900/40 pt-6 text-center text-gray-500">
          © 2026 Phantom Order. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}