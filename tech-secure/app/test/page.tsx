import React from "react";
import getAllIndustries from "../actions/getAllIndustries";

type Props = {};

const page = async (props: Props) => {
	const data = await getAllIndustries();
	console.log(data);
	return <div>page</div>;
};

export default page;
