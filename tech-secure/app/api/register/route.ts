import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { name, password } = body;

		// Check if username and password are provided
		if (!name || !password) {
			return new NextResponse("name and password are required", {
				status: 400,
			});
		}

		// // Check if user with the same username already exists
		// const existingUser = await prisma.user.findUnique({
		// 	where: { username },
		// });
		// if (existingUser) {
		// 	return new NextResponse("Username is already taken", { status: 400 });
		// }

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 12);

		// Create the user
		const newUser = await prisma.user.create({
			data: {
				name,
				hashedPassword,
			},
			// Return only necessary fields
			select: {
				id: true,
				name: true,
			},
		});

		return new NextResponse(JSON.stringify(newUser), { status: 201 });
	} catch (error) {
		console.error("REGISTRATION_ERROR", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
