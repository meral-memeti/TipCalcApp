import React from "react";
import styles from "./styles.module.scss";
import { Input } from "../input/index";
import { Tip } from "../tip/index";
import { Result } from "../result/index";

export const Calculator = () => {
  return (
    <div className={styles.container}>
      <form>
        <Input label="Bill" icon="iconBill" />
        <Tip />
        <Input label="Number of People" icon="iconPerson" />
      </form>
      <Result />
    </div>
  );
};
