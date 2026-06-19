export default function JoinSection() {
  return (
    <section
      id="join"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <div
        className="
          rounded-3xl
          border
          border-purple-800
          bg-black/40
          backdrop-blur-md
          p-10
          text-center
        "
      >
        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
          Recruitment
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Join The Order
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Phantom Order seeks loyal, active, and disciplined
          individuals willing to contribute to the growth and
          strength of the organization.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">

          <div className="rounded-xl border border-purple-900 p-6">
            <h3 className="text-purple-300 font-bold text-lg">
              Requirements
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✓ Active Discord Member</li>
              <li>✓ Respectful Conduct</li>
              <li>✓ Loyalty to the Order</li>
              <li>✓ Willingness to Learn</li>
              <li>✓ Teamwork & Discipline</li>
            </ul>
          </div>

          <div className="rounded-xl border border-purple-900 p-6">
            <h3 className="text-purple-300 font-bold text-lg">
              Benefits
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✓ Structured Rank Progression</li>
              <li>✓ Leadership Opportunities</li>
              <li>✓ Exclusive Events</li>
              <li>✓ Community Recognition</li>
              <li>✓ Department Participation</li>
            </ul>
          </div>

        </div>

        <a
          href="https://discord.gg/YOUR_INVITE"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-10
            rounded-xl
            border
            border-purple-500
            bg-purple-500/10
            px-8
            py-4
            font-bold
            hover:bg-purple-700
            hover:shadow-[0_0_30px_rgba(168,85,247,.8)]
            transition
          "
        >
          JOIN OUR DISCORD
        </a>

      </div>
    </section>
  );
}