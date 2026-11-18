import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function useUpdateSearchParam() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    params.delete("page");
    router.push(`${pathname}?${params}`);
  };
}
