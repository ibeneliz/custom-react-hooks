import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue){
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [isFetching, setIsFetching] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);
    return {
        error,
        fetchedData,
        isFetching,
        setFetchedData
    }
}