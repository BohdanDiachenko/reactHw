import { useCallback, useEffect, useMemo, useState } from "react";
import { FetchResult } from "../types/types";

const useFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const abortController = useMemo(() => new AbortController(), []);

    const getData = useCallback(async () => {
        const signal = abortController.signal;

        try {
            setError(null);
            setIsLoading(true);
            const response = await fetch(url, { signal });

            if (!response.ok) {
                throw new Error(`Failed to fetch data.`);
            }

            const responseData: T = await response.json();
            setData(responseData);
        } catch (error) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setIsLoading(false);
        }
    }, [abortController.signal, url]);

    useEffect(() => {
        getData();

        return () => {
            abortController.abort();
        };
    }, [getData]);

    return {
        data: data as T,
        isLoading,
        error,
        refetch: getData,
    };
};

export default useFetch;
