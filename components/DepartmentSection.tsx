export default function DepartmentSection() {
  const departments = [
    {
      name: "Administration & Internal Affairs",
      description:
        "Responsible for governance, records, regulations, personnel management, and internal investigations."
    },
    {
      name: "Operations & Security",
      description:
        "Maintains order, coordinates missions, enforces security protocols, and protects the integrity of the Order."
    },
    {
      name: "Events",
      description:
        "Plans, organizes, and manages official gatherings, competitions, ceremonies, and community activities."
    },
    {
      name: "War",
      description:
        "Leads strategic operations, military planning, combat readiness, and battlefield coordination."
    },
    {
      name: "Treasury",
      description:
        "Oversees finances, resources, budgeting, rewards, and the economic stability of the Order."
    },
  ];

  return (
    <section
      id="departments"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center mb-16">

        <p className="text-purple-400 tracking-[0.3em] uppercase text-sm">
          Divisions
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Departments
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {departments.map((department) => (
          <div
            key={department.name}
            className="
              rounded-2xl
              border
              border-purple-800
              bg-black/40
              backdrop-blur-md
              p-8
              hover:border-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,.5)]
              transition
            "
          >
            <h3 className="text-xl font-bold text-purple-300">
              {department.name}
            </h3>

            <p className="mt-4 text-gray-400">
              {department.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}