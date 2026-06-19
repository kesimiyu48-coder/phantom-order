"use client";

import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const handleSubmit = (e) => {
  e.preventDefault();
  alert("Registration system coming soon.");
};  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 rounded-2xl border border-purple-700/40 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.2)]">
        
        <h1 className="text-3xl font-bold text-purple-400 text-center mb-6">
          Join Phantom Order
        </h1>

        <input
          className="w-full mb-3 p-3 rounded bg-black border border-purple-700/40"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 rounded bg-black border border-purple-700/40"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-5 p-3 rounded bg-black border border-purple-700/40"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}