import { useState } from "react";

const useToggle = (initial: boolean) => {
  const [value, setValue] = useState(initial);

  const toggle = (): void => {
    setValue((val) => !val);
  };

    return { value, toggle };
};

export default useToggle;
