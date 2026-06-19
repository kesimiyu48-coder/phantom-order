"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    if (!form.name || !form.email || !form.password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Unable to create account.");
        return;
      }

      setSuccess(true);
      setMessage("Account created successfully.");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage(
        "Unable to connect to the server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-purple-900 rounded-2xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-purple-400 tracking-wider">
            PHANTOM ORDER
          </h1>

          <p className="text-gray-400 mt-3">
            Create Your Account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white outline-none focus:border-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white outline-none focus:border-purple-500"
          />

          {message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                success
                  ? "bg-green-900/30 text-green-400 border border-green-700"
                  : "bg-red-900/30 text-red-400 border border-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="text-purple-400 hover:text-purple-300 font-semibold"
          >
            Login Here
          </Link>
        </div>
      </div>
    </main>
  );
}