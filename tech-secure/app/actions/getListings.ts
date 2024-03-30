import prisma from "@/lib/prismadb";

const getJobs = async () => {
	try {
		const jobs = await prisma.layoff.findMany({
			// Automatically includes all scalar fields of Job
			include: {
				organization: true,
				postedBy: true,
				// Add other relations if needed
			},
		});

		return jobs;
	} catch (err: any) {
		console.error("Error fetching jobs:", err);
		return [];
	}
};

export default getJobs;
