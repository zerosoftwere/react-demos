import { useEffect, useState } from "react";

const useDebounce = <T> (value: T, timeout: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return () => clearTimeout(timer);
  }, [value, timeout])

  return debounceValue;
};

export default useDebounce;