import { getServerSession } from "next-auth";

export default async function AdminPage() {
  const session = await getServerSession();

  // not logged in
  if (!session) {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        Access Denied — Not Logged In 🚫
      </div>
    );
  }

  // not admin
  if (session.user.role !== "admin") {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        Access Denied — Admins Only 🛡️
      </div>
    );
  }

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h1>🔥 Phantom Order Admin Panel</h1>
      <p>Welcome Commander 👑</p>
    </div>
  );
}