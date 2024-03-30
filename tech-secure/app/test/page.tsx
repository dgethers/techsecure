import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import getAllIndustries from "../actions/getAllIndustries";
import getAllLayoffs from "../actions/getListings";
type Props = {};

const Testpage = async (props: Props) => {
	// const { data: session } = useSession();
	// console.log(session);
	// const data = await getAllIndustries();
	const layoffs = await getAllLayoffs();
	// console.log(data);
	console.log(layoffs);
	return (
		<div>
			<div>hello</div>
		</div>
	);
};

export default Testpage;
