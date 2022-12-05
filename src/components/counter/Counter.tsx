import React, { FC } from "react";
import { useState } from "react";
import styles from "./Counter.module.scss";
type Props = {
  initialValue: number;
  id: string;
  onChange: (key: string, quantity: number) => void;
};
export const Counter: FC<Props> = ({ id, initialValue, onChange }) => {
  const handleIncrement = () => {
    onChange(id, initialValue + 1);
  };

  const handleDecrement = () => {
    onChange(id, initialValue - 1);
  };

  return (
    <div className={styles.counter} key={id}>
      <button onClick={handleDecrement}>-</button>
      <span>{initialValue}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
