import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
	if (req.method !== "POST") {
		return new NextResponse("method not allowed", { status: 405 });
	}

	try {
		const currentUser = await getCurrentUser();

		const body = await req.json();

		const { industries, importantAspectsNewRole, locations } = body;

		// Assuming getCurrentUser returns null if unauthorized
		if (!currentUser) {
			// return res.status(401).json({ message: "Unauthorized" });
			return new NextResponse("Unauthorized", { status: 401 });
		}

		// Validation example: ensuring all received fields are arrays of strings
		if (
			!Array.isArray(industries) ||
			!Array.isArray(importantAspectsNewRole) ||
			!Array.isArray(locations)
		) {
			return new NextResponse("Invalid input format", { status: 400 });
		}

		// Update user preferences in the database
		const updatedUser = await prisma.user.update({
			where: {
				id: currentUser.id, // Ensure getCurrentUser provides the id
			},
			data: {
				industries,
				importantAspectsNewRole,
				locations,
			},
		});
		return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
	} catch (error) {
		console.error("UPDATE_PREFERENCES_ERROR", error);
		return new NextResponse("Internal Server Error", { status: 200 });
	}
}
