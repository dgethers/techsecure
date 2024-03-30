"use client";
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

			<p>SURVEY PAGE</p>
		</div>
	);
};

export default SurveyPage;
