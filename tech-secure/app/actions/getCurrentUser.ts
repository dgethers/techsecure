import prisma from "@/lib/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
	try {
		const session = await getSession();

		//IF NO SESSION RETURN NULL
		if (!session?.user?.name) return null;

		//SEARCH FOR USER IN OUR DB
		const currentUser = await prisma.user.findUnique({
			where: {
				name: session.user.name as string,
			},
		});

		//IF NO USER FOUND RETURN NULL
		if (!currentUser) {
			return null;
		}
		//RETURN CURRENT USER FROM OUR DB
		return currentUser;
	} catch (e: any) {
		return null;
	}
};

export default getCurrentUser;
