import { useEffect, useState } from "react";
import getData from "utils/services/getData";

const useRequest = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    const fetch = async () => {
      const res = await getData<T>(url);

      if (typeof res === "string") setErrors(res);
      else setData(res);

      setIsLoading(false);
    };
    
    setIsLoading(true);
    fetch();
  }, [url]);

  return { isLoading, data, errors };
};

export default useRequest;
