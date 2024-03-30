import prisma from "@/lib/prismadb";

const getAllLayoffs = async () => {
	try {
		const layoffs = await prisma.layoff.findMany({});

		return layoffs;
	} catch (err) {
		console.error("Error fetching layoffs:", err);
		return [];
	}
};

export default getAllLayoffs;
