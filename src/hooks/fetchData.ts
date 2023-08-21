import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(url);
          setData(response.data.results);
      } 
      catch (err) {
          setError('An error has occurred');
      } 
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetchData;
