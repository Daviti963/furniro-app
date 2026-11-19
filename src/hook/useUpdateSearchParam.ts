import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUpdateSearchParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (key: string, value: string, resetPage = true) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    if (resetPage) params.delete("page");
    router.push(`${pathname}?${params}`);
  };
}
