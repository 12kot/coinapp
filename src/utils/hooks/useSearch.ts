import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { searchCoins } from "utils/constants/API";
import getData from "utils/services/getData";

export const useSearch = <T>(value: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<string>("");

  const debounce = useDebounce(value, 500);

  useEffect(() => {
    if (debounce) {
      const fetch = async () => {
        const res = await getData<T>(searchCoins(value));

        if (typeof res === "string") setErrors(res);
        else setData(res);

        setIsLoading(false);
      };

      fetch();
    }
  }, [debounce]);

  return { data, isLoading, errors };
};
