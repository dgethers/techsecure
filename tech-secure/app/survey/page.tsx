"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const locations = [
	{
		id: "new-york",
		label: "New York",
	},
	{
		id: "tokyo",
		label: "Tokyo",
	},
	{
		id: "paris",
		label: "Paris",
	},
	{
		id: "london",
		label: "London",
	},
	{
		id: "dubai",
		label: "Dubai",
	},
	{
		id: "singapore",
		label: "Singapore",
	},
	{
		id: "shanghai",
		label: "Shanghai",
	},
	{
		id: "istanbul",
		label: "Istanbul",
	},
	{
		id: "sydney",
		label: "Sydney",
	},
	{
		id: "rome",
		label: "Rome",
	},
];

const importantAspectsNewRole = [
	{
		id: "team-collaboration",
		label: "Team Collaboration and Support",
	},
	{
		id: "career-growth",
		label: "Opportunities for Career Growth and Development",
	},
	{
		id: "work-life-balance",
		label: "Work-Life Balance",
	},
	{
		id: "innovative-culture",
		label: "Innovative and Creative Work Environment",
	},
	{
		id: "leadership-quality",
		label: "Quality of Leadership and Management",
	},
	{
		id: "company-values",
		label: "Alignment with Company Values and Mission",
	},
	{
		id: "compensation-benefits",
		label: "Competitive Compensation and Benefits",
	},
	{
		id: "impactful-work",
		label: "Doing Impactful and Meaningful Work",
	},
	{
		id: "learning-opportunities",
		label: "Learning Opportunities and Professional Development",
	},
	{
		id: "work-autonomy",
		label: "Autonomy in Work",
	},
];

const industries = [
	{ id: "AI", label: "AI" },
	{ id: "Aerospace", label: "Aerospace" },
	{ id: "Construction", label: "Construction" },
	{ id: "Consumer", label: "Consumer" },
	{ id: "Crypto", label: "Crypto" },
	{ id: "Data", label: "Data" },
	{ id: "Education", label: "Education" },
	{ id: "Energy", label: "Energy" },
	{ id: "Finance", label: "Finance" },
	{ id: "Fitness", label: "Fitness" },
	{ id: "Food", label: "Food" },
	{ id: "HR", label: "HR" },
	{ id: "Hardware", label: "Hardware" },
	{ id: "Healthcare", label: "Healthcare" },
	{ id: "Infrastructure", label: "Infrastructure" },
	{ id: "Legal", label: "Legal" },
	{ id: "Logistics", label: "Logistics" },
	{ id: "Manufacturing", label: "Manufacturing" },
	{ id: "Marketing", label: "Marketing" },
	{ id: "Media", label: "Media" },
	{ id: "Other", label: "Other" },
	{ id: "Product", label: "Product" },
	{ id: "Real Estate", label: "Real Estate" },
	{ id: "Recruiting", label: "Recruiting" },
	{ id: "Retail", label: "Retail" },
	{ id: "Sales", label: "Sales" },
	{ id: "Security", label: "Security" },
	{ id: "Support", label: "Support" },
	{ id: "Transportation", label: "Transportation" },
	{ id: "Travel", label: "Travel" },
];

const FormSchema = z.object({
	locations: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
	importantAspectsNewRole: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		}),
	industries: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "You have to select at least one item.",
		}),
});

export default function Survey() {
	const { data: session } = useSession();
	console.log(session);
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			locations: ["New York"],
			industries: ["Healthcare"],
			importantAspectsNewRole: ["career-growth"],
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>, e: any) {
		e.preventDefault();
		console.log(data);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='locations'
					render={() => (
						<FormItem>
							<div className='mb-4'>
								<FormLabel className='text-base'>Location</FormLabel>
								<FormDescription>Where would you like to work?</FormDescription>
							</div>
							{locations.map((item) => (
								<FormField
									key={item.id}
									control={form.control}
									name='locations'
									render={({ field }) => {
										return (
											<FormItem
												key={item.id}
												className='flex flex-row items-start space-x-3 space-y-0'
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.id)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([...field.value, item.id])
																: field.onChange(
																		field.value?.filter(
																			(value) => value !== item.id
																		)
																  );
														}}
													/>
												</FormControl>
												<FormLabel className='font-normal'>
													{item.label}
												</FormLabel>
											</FormItem>
										);
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='importantAspectsNewRole'
					render={() => (
						<FormItem>
							<div className='mb-4'>
								<FormLabel className='text-base'>Culture</FormLabel>
								<FormDescription>
									What is most important to you?
								</FormDescription>
							</div>
							{importantAspectsNewRole.map((item) => (
								<FormField
									key={item.id}
									control={form.control}
									name='importantAspectsNewRole'
									render={({ field }) => {
										return (
											<FormItem
												key={item.id}
												className='flex flex-row items-start space-x-3 space-y-0'
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.id)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([...field.value, item.id])
																: field.onChange(
																		field.value?.filter(
																			(value) => value !== item.id
																		)
																  );
														}}
													/>
												</FormControl>
												<FormLabel className='font-normal'>
													{item.label}
												</FormLabel>
											</FormItem>
										);
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='industries'
					render={() => (
						<FormItem>
							<div className='mb-4'>
								<FormLabel className='text-base'>Industry</FormLabel>
								<FormDescription>
									Do you have any favorite industries in mind?
								</FormDescription>
							</div>
							{industries.map((item) => (
								<FormField
									key={item.id}
									control={form.control}
									name='industries'
									render={({ field }) => {
										return (
											<FormItem
												key={item.id}
												className='flex flex-row items-start space-x-3 space-y-0'
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.id)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([...field.value, item.id])
																: field.onChange(
																		field.value?.filter(
																			(value) => value !== item.id
																		)
																  );
														}}
													/>
												</FormControl>
												<FormLabel className='font-normal'>
													{item.label}
												</FormLabel>
											</FormItem>
										);
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
