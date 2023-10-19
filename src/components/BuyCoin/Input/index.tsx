import Button from "components/Button";
import Input from "components/Input";
import React, { ReactElement, useState } from "react";
import styles from "./input.module.scss";

interface Props {
  supply: number;
}
const BuyInput = ({ supply }: Props): ReactElement => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>();

  const handleBuy = () => {
    if (!value) {
      setError("Значение не может быть пустым");
      return;
    }

    if (+value > supply) {
      setError("Слишком много монет, поменьше плиз");
      return;
    }

    if (+value < 0) {
      setError("Продавать моентки тут нельзя");
      return;
    }

    setError("");
    setValue("");
    alert("Вы успешно купили " + value)
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <label className={styles.input}>
      <p className={styles.label}></p>
      <Input
        style={{
          borderColor: !!error ? "red" : "green",
        }}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="0.0012"
        type="number"
      />
      {!!error && <p className={styles.error}>{error}</p>}
      <Button
        onClick={handleBuy}
        text={"BUY"}
        isActive={true}
        style={{ height: "30px" }}
      />
    </label>
  );
};

export default BuyInput;
