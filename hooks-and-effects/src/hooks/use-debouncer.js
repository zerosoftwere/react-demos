import { useEffect, useState } from "react"

const useDebouncer = (text, timeout) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(text);
    }, timeout);
    return () => clearTimeout(timer);
  }, [text, timeout]);

  return value;
};

export default useDebouncer;