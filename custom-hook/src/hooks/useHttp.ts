import { useCallback, useState } from "react";

const useHttp = <T> (startWithPending: boolean = false) => {
  const [pending, setPending] = useState<boolean>(startWithPending);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const sendRequest = useCallback(async (url: string, transformer?: (data: any) => T | null) => {
    try {
      const response = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
      if (!response.ok) throw new Error('Failed to fetch data');
      let responseData = await response.json();
      if (transformer) responseData = transformer(responseData);

      setData(responseData);
    } catch (responseError: any) {
      setError(responseError.message);
    }
    setPending(false);
  }, []);

  return { pending, error, data, sendRequest };
}

export default useHttp;