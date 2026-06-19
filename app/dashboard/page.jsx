"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h1>🔥 Phantom Order Admin Panel</h1>

      <h2 style={{ marginTop: "20px" }}>👥 Members</h2>

      <div>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid purple",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}