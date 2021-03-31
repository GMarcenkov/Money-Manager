import React from "react";
import { TransactionEvent } from "../../../../../../models/Transaction";
import styles from "../../AddTransactionStyle.module.css";
import { Transfer } from "../../../../../../helpers/Variables";
type Props = {
  transaction: TransactionEvent;
  isFeesOpen: boolean;
};

const InputTitles: React.FC<Props> = ({ transaction, isFeesOpen }) => {
  return (
    <div className={styles.content_titles}>
      <div className={styles.title}>Day</div>
      {transaction.type === Transfer ? (
        <div className={styles.title}>From</div>
      ) : (
        <div className={styles.title}>Account</div>
      )}
      {transaction.type === Transfer ? (
        <div className={styles.title}>To</div>
      ) : (
        <div className={styles.title}>Category</div>
      )}
      <div className={styles.title}>Amount</div>
      {isFeesOpen ? <div className={styles.title}>Fees</div> : null}
      <div className={styles.title}>Note</div>
    </div>
  );
};
export default InputTitles;
