"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type Input = z.infer<typeof formSchema>;

const formSchema = z.object({
	username: z.string().min(2).max(50),
	password: z.string().min(2).max(50),
});

export default function RegisterPage() {
	const session = useSession();
	const router = useRouter();

	const form = useForm<Input>({
		resolver: zodResolver(formSchema),
	});
	function onSubmit(values: Input, e: any) {
		// e.preventDefault();
		console.log(values);
		axios.post("/api/register", values);
	}
	form.watch();

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<Card className=' w-1/3'>
				<CardHeader>
					<CardTitle>Register</CardTitle>
					<CardDescription>Enter your credentials below</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='Email' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder='Password'
												{...field}
												type='password'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex justify-center items-center'>
								<Button type='submit' className='w-full'>
									Register
								</Button>
							</div>
						</form>
					</Form>
				</CardContent>
				<CardFooter className='flex flex-col'>
					<p className='text-sm mb-2'>OR</p>

					<p className='text-sm mb-2'>
						Dont have an Account? <Link href='/register'>REGISTER HERE</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
