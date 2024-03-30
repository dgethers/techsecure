import React from "react";
import getAllIndustries from "../actions/getAllIndustries";
import getAllLayoffs from "../actions/getListings";

type Props = {};

const page = async (props: Props) => {
	const data = await getAllIndustries();
	const layoffs = await getAllLayoffs();
	// console.log(data);
	console.log(layoffs);
	return <div>page</div>;
};

export default page;
