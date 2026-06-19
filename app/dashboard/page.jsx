"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-purple-400">
        LOADING USER NODE...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-purple-400">
        USER DASHBOARD
      </h1>

      <p className="mt-4 text-gray-300">
        Welcome, {session?.user?.name || session?.user?.email}
      </p>

      <div className="mt-6 border border-purple-800 p-6 rounded-xl">
        <p><b>Email:</b> {session?.user?.email}</p>
        <p><b>Role:</b> {session?.user?.role}</p>
      </div>
    </div>
  );
}