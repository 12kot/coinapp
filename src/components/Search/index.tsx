import React, { ReactElement } from "react";
import Input from "components/Input";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Seacrh = ({ value, setValue }: Props): ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      placeholder="Ethereum.."
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Seacrh;
