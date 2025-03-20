import React from "react";
import s from "./TransactionHistory.module.css";
import clsx from "clsx";
const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.thead}>Type</th>
            <th className={s.thead}>Amount</th>
            <th className={s.thead}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, index) => (
            <tr key={id} className={clsx({ [s.status]: index % 2 !== 0 })}>
              <td className={s.tbody}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </td>
              <td className={s.tbody}>{amount}</td>
              <td className={s.tbody}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
