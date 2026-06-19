catch (error) {
  console.error("🔥 SIGNUP ERROR FULL:", error);

  return Response.json(
    {
      error: "Server error",
      message: error?.message,
      stack: error?.stack,
    },
    { status: 500 }
  );
}