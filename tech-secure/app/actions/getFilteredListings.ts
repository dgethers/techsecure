import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

const getFilteredListings = async () => {
	try {
		// Fetch all layoffs from the database
		const layoffs = await prisma.layoff.findMany({});
		// Fetch the current user and their preferences
		const user = await getCurrentUser();
		const { locations, industries } = user;

		// Check if a layoff matches any of the user's preferred locations and industries
		// If the user has not specified preferences (i.e., arrays are empty), don't filter by that criteria
		const filteredLayoffs = layoffs.filter(
			(layoff) =>
				(locations.length === 0 || locations.includes(layoff.location)) &&
				(industries.length === 0 || industries.includes(layoff.industry))
		);

		return filteredLayoffs;
	} catch (err) {
		console.error("Error fetching layoffs:", err);
		return [];
	}
};

export default getFilteredListings;
