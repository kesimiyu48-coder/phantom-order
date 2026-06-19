"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="border border-purple-800 p-8 rounded-xl w-96"
      >
        <h1 className="text-purple-400 text-2xl mb-6">
          ADMIN ACCESS
        </h1>

        <input
          name="email"
          placeholder="Admin Email"
          className="w-full p-2 mb-4 bg-black border border-purple-700"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-black border border-purple-700"
        />

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button className="w-full bg-purple-600 py-2">
          LOGIN
        </button>
      </form>
    </div>
  );
}