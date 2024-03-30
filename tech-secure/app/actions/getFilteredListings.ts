import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

const getFilteredListings = async () => {
	try {
		const layoffs = await prisma.layoff.findMany({});
		const user = await getCurrentUser();
		const { locations, industries } = user;

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
