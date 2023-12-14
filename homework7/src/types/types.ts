export interface UserData {
    id: number;
    name: string;
}

export interface PostData {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface FetchResult<T> {
    data: T;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}
