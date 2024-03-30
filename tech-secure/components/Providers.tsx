"use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// https://next-auth.js.org/getting-started/client#sessionprovider
import { SessionProvider } from "next-auth/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

//DARM MODE STUFF
// import { ThemeProvider } from "@/components/theme-provider";

// REACT QUERY STUFF
// const queryClient = new QueryClient();

const Providers = ({
	children,

	...props
}: {
	children: React.ReactNode;
}) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
