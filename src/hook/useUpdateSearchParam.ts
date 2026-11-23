import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUpdateSearchParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // useCallback: ფუნქცია ყოველ რენდერზე თავიდან არ იქმნება,
  // ამიტომ SearchInput-ის useEffect ზედმეტად არ გაეშვება.
  return useCallback(
    (key: string, value: string, resetPage = true) => {
      const params = new URLSearchParams(searchParams);

      // ხაფანგი (ბ): ცარიელი მნიშვნელობა → პარამეტრს ვშლით (?q= არ დარჩეს)
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      if (resetPage) params.delete("page");
      router.push(`${pathname}?${params}`);
    },
    [router, pathname, searchParams],
  );
}
