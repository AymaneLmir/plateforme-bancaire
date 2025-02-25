import { NextResponse } from "next/server";

export async function POST() {
  const isAuthenticated = true; 

  if (isAuthenticated) {
    const response = NextResponse.json({ message: "Login successful" });
    
    // Création du cookie httpOnly
    response.cookies.set("authenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      maxAge: 60 * 60 * 24 * 7, 
      path: "/",
    });
    
    return response;
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
}
