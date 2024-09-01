export interface Hero {
    id: number;
    name: string;
    available: boolean;
  };

  export interface FetchState<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
  };