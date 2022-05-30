
import React, { useContext } from 'react';
import { GlobalContext } from '../../contextProvider/TipContext';
import styles from './styles.module.scss';

export const Input = ({ label, icon }) => {
    
  const { bill, setBill, people, setPeople } = useContext(GlobalContext);

  return (
    <div className={`${styles.input} ${styles[icon]}`}>
      <label htmlFor="bill">{label}</label>
      <input id="bill" type="number" placeholder="0" value={label === "Bill" && bill > 0 ? bill : label !== "Bill" && people > 0 ? people : ''} onChange={(e) => {
        label === "Bill" ? setBill(parseInt(e.target.value)) : setPeople(parseInt(e.target.value))
      }} />
    </div>
  )
}
