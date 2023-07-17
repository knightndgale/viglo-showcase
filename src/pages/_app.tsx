import config from "@/env";
import initializeReduxDevTool from "@/store/initializeReduxDevTool";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {config.node_env !== "production" && <ReactQueryDevtools position="bottom-right" />}
    </QueryClientProvider>
  );
}
initializeReduxDevTool();
