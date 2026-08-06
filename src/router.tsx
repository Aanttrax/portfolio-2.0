import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { createHashHistory } from "@tanstack/history";
import { routeTree } from "./routeTree.gen";

const useHash = import.meta.env["VITE_HASH_ROUTER"] === "1";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...(useHash && typeof window !== "undefined" ? { history: createHashHistory() } : {}),
  });

  return router;
};
