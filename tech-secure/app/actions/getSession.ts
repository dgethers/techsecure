import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
	//GETTING SERVERSIDE SESSION AND RETURNING IT
	return await getServerSession(authOptions);
}
