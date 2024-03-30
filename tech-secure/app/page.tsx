"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	// const googleLogin = () => {
	// 	signIn("google", {
	// 		callbackUrl: "/survey",
	// 	});
	// };

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<h1 className='text-5xl font-bold text-gray-900 mb-10'>Tech Secure</h1>
			<div className='flex gap-4'>
				<Link
					className='inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-750 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
					href='/login'
				>
					Login
				</Link>
				<Link
					className='inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-550 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
					href='/register'
				>
					Register
				</Link>
			</div>
		</div>
	);
}
