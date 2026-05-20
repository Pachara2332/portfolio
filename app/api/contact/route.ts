import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    console.info("New contact form submission", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    });

    return Response.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
