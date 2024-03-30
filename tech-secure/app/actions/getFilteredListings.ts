import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

const getFilteredListings = async () => {
	try {
		// Fetch all layoffs from the database
		const layoffs = await prisma.layoff.findMany({});

		// Fetch the current user, assuming getCurrentUser is an async function
		const user = await getCurrentUser();

		// Directly use the locations and industries fields from the user object
		const { locations, industries } = user;

		// Filter the layoffs based on the user's locations and industries
		const filteredLayoffs = layoffs.filter(
			(layoff) =>
				(locations.includes(layoff.location) || locations.length === 0) &&
				(industries.includes(layoff.industry) || industries.length === 0)
		);

		return filteredLayoffs;
	} catch (err) {
		console.error("Error fetching layoffs:", err);
		return [];
	}
};

export default getFilteredListings;
