import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { industries, locations, importantAspectsNewRole } = body;

		const currentUser = 

		

		return new NextResponse(JSON.stringify(newUser), { status: 201 });
	} catch (error) {
		console.error("REGISTRATION_ERROR", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
