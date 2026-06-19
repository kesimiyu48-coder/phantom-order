"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (!res || res.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="border border-purple-800 p-8 rounded-xl w-96"
      >
        <h1 className="text-purple-400 text-2xl mb-6">
          PHANTOM LOGIN
        </h1>

        <input
          name="email"
          placeholder="Email"
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

        <button
          disabled={loading}
          className="w-full bg-purple-600 py-2"
        >
          {loading ? "LOGGING IN..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
}