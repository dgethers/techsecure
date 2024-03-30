import prisma from "@/lib/prismadb";

const getAllIndustries = async () => {
	try {
		const industries = await prisma.industries.findMany({});

		return industries;
	} catch (err) {
		console.error("Error fetching industries:", err);
		return [];
	}
};

export default getAllIndustries;
