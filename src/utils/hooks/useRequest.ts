import { useEffect, useState } from "react";

const useRequest = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    const f = async () => {
      const res = await fetch(url);
      if (res.ok) setData(await res.json());
        else setErrors(res.statusText);
        
      setIsLoading(false);
    };

    f();
  }, [url]);

  return { isLoading, data, errors };
};

export default useRequest;
