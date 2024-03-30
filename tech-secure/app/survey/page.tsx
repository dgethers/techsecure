import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import React from "react";
type Props = {};

const SurveyPage = (props: Props) => {
	return (
		<div>
			<Button
				onClick={() =>
					signOut({
						callbackUrl: "/",
					})
				}
			>
				Log Out
			</Button>
		</div>
	);
};

export default SurveyPage;
