import React, { useCallback } from "react";
import styles from "../../AddTransactionStyle.module.css";
import { TransactionEvent } from "../../../../../../interfaces/Transaction";
import { HandleInput } from "../../../../../../interfaces/Function";
import { errorMsg } from "../../../../../../helpers/Validation";
import { TransactionTypes } from "../../../../../../helpers/Variables";
type Props = {
  handleInputChange: (event: HandleInput) => void;
  setIsFeesOpen: (isOpen: boolean) => void;
  transaction: TransactionEvent;
  isFeesOpen: boolean;
  error: string;
};

const AmountInput: React.FC<Props> = ({
  handleInputChange,
  setIsFeesOpen,
  transaction,
  isFeesOpen,
  error,
}) => {
  const setFeesOpen = useCallback(() => {
    setIsFeesOpen(!isFeesOpen);
  }, []);

  return (
    <div className={styles.input_container}>
      <div className={styles.amount_container}>
        <input
          type="number"
          name="amount"
          className={styles.input}
          value={transaction.amount}
          onChange={handleInputChange}
        />
        {transaction.type === TransactionTypes.Transfer && !isFeesOpen ? (
          <div className={styles.fees} onClick={setFeesOpen}>
            Fees
          </div>
        ) : null}
      </div>
      {errorMsg(error)}
    </div>
  );
};
export default AmountInput;
