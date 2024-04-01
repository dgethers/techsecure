import { getServerSession } from "next-auth";


export default async function getSession() {
	//GETTING SERVERSIDE SESSION AND RETURNING IT
	return await getServerSession({});
}
