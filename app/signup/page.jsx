"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      // redirect to login after successful signup
      router.push("/login");

    } catch (err) {
      setError("Network error. Try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">

      <div className="w-full max-w-md border border-purple-800 bg-black/60 backdrop-blur-md p-8 rounded-2xl">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-purple-400 tracking-widest text-center">
          JOIN PHANTOM ORDER
        </h1>

        <p className="text-center text-gray-400 mt-2 text-sm">
          CREATE YOUR ACCESS NODE
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-black border border-purple-700 rounded-lg focus:outline-none focus:border-purple-400"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-black border border-purple-700 rounded-lg focus:outline-none focus:border-purple-400"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-black border border-purple-700 rounded-lg focus:outline-none focus:border-purple-400"
            required
          />

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition"
          >
            {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </button>

        </form>

        {/* REDIRECTION LINK (STEP 2 FEATURE) */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-400 hover:underline"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}