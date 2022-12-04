import React, { FC } from "react";
import { useState } from "react";
import styles from "./Counter.module.scss";
type Props = {
  initialValue: number;
  id: string;
  onChange: (id: string, initialValue: number) => void;
};
export const Counter: FC<Props> = ({ id, initialValue, onChange }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
    onChange(id, counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
    onChange(id, counter - 1);
  };

  return (
    <div className={styles.counter}>
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
