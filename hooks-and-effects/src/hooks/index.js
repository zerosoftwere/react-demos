import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
    return () => {clearInterval(interval)};
  }, []);

  return counter;
};

export const useDebouncer = (text, timeout) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(text);
    }, timeout);
    return () => clearTimeout(timer);
  }, [text]);

  return value;
};

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const httpClient = async (url) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status}`);
      setResponse(await response.json());
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return {isLoading, error, response, httpClient};
};

export const useInput = (intialValue='', validator) => {
  const [value, setValue] = useState(intialValue);
  const [isValid, setIsValid] = useState();

  const validate = useCallback((value) => {
    if (validator.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  });

  useEffect(() => {
    validate(value);
  }, [validate, validator]);

  const onChange = event => {
    setValue(event.target.value);
    validate(event.target.value);
  };

  return {value, isValid, setValue, onChange};
};