"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const googleLogin = () => {
		signIn("google", {
			callbackUrl: "/survey",
		});
	};

	return (
		<div>
			<Button onClick={googleLogin}>GOOGLE LOG IN</Button>
			{/* <p>random test</p> */}
			<Link href='/login'>
				<p>LOGIN HERE PLS</p>
			</Link>
			<Link href='/register'>
				<p>REGISTER HERE PLS</p>
			</Link>
		</div>
	);
}
