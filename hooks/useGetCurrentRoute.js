import { useRouter } from "next/router";

export default function useGetCurrentRoute() {
  const router = useRouter();

  return router.asPath;
}
