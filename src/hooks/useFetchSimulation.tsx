import { useState, useEffect } from 'react';
import { FetchState } from '../interfaces/hero-interfaces';

export function useFetchSimulation<T>(getFetch:()=>Promise<T>) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const data = await getFetch();
        setState({
          data,
          isLoading: false,
          error: null,
        });
      } catch (error: any) {
        setState({
          data: null,
          isLoading: false,
          error: 'Failed to fetch heroes.',
        });
        console.error(error.message)
      }
    };

    fetchData();
  }, []);

  return state;
}