"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type SearchParamValue = string | string[] | number | boolean | null | undefined;

interface UseSearchParamsReturn {
  searchParams: Record<string, string>;
  setParam: (key: string, value: SearchParamValue) => void;
  removeParam: (key: string) => void;
  clearParams: () => void;
  getParam: (key: string) => string | null;
}

export function useUrlSearchParams(): UseSearchParamsReturn {
  const router = useRouter();
  const searchParams: URLSearchParams | any = useSearchParams();
  const pathname = usePathname();

  // Convert URLSearchParams to plain object
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  // Helper function to create new URL with updated params
  const createUpdatedUrl = useCallback(
    (updatedParams: URLSearchParams) => {
      const paramString = updatedParams.toString();
      return paramString ? `${pathname}?${paramString}` : pathname;
    },
    [pathname]
  );

  // Helper function to normalize values
  const normalizeValue = useCallback((value: SearchParamValue) => {
    if (value === null || value === undefined || value === "") return null;
    if (Array.isArray(value)) return value.length > 0 ? value.join(",") : null;
    return String(value);
  }, []);

  const setParam = useCallback(
    (key: string, value: SearchParamValue) => {
      const params = new URLSearchParams(searchParams);
      const normalizedValue = normalizeValue(value);
      if (normalizedValue === null) {
        params.delete(key);
      } else {
        params.set(key, normalizedValue);
      }
      router.push(createUpdatedUrl(params));
    },
    [searchParams, router, createUpdatedUrl, normalizeValue]
  );

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(key);
      router.push(createUpdatedUrl(params));
    },
    [searchParams, router, createUpdatedUrl]
  );

  const clearParams = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  return {
    searchParams: searchParamsObject,
    setParam,
    removeParam,
    clearParams,
    getParam,
  };
}
