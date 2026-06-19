import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  if (user.role !== "admin") {
    return Response.json({ error: "Access denied" }, { status: 403 });
  }

  return Response.json({
    message: "Admin access granted",
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
}