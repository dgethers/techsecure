import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

const getAllLayoffs = async () => {
	try {
		const layoffs = await prisma.layoff.findMany({});
		const user = getCurrentUser();
		return layoffs;
	} catch (err) {
		console.error("Error fetching layoffs:", err);
		return [];
	}
};

export default getAllLayoffs;
