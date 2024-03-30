import prisma from "@/lib/prismadb";

const getAllLayoffs = async () => {
	try {
		const layoffs = await prisma.layoff.findMany({
			// This will fetch all documents from Layoff model
			// No need to include relations unless they are defined in your model
		});

		return layoffs;
	} catch (err) {
		console.error("Error fetching layoffs:", err);
		return [];
	}
};

export default getAllLayoffs;
