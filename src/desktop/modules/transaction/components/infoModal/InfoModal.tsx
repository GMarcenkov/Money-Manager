import React from "react";
import InfoModalStyle from "./infoModalStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { State } from "../../monthlyContainer/TransactionContainer";

type Props = {
  isInfoTransactionOpen: boolean;
  handleOpenTransaction: (date: any) => void;
  handleOpenInfoModal: (date: any) => void;
  transaction: State["transaction"];
  specificDay: State["specificDay"];
};

const InfoModal: React.FC<Props> = ({
  isInfoTransactionOpen,
  handleOpenTransaction,
  handleOpenInfoModal,
  transaction,

  specificDay,
}) => {
  return (
    <div onClick={() => handleOpenInfoModal("")}>
      {isInfoTransactionOpen ? (
        <div className={InfoModalStyle.modal_wrapper}>
          <div className={InfoModalStyle.container}>
            <div className={InfoModalStyle.date}>
              {moment(transaction.date).format("DD.MM.YYYY(dddd)")}
            </div>
            <div className={InfoModalStyle.content}>
              <table>
                {specificDay.events.map((transaction) => (
                  <tr>
                    <th className={InfoModalStyle.content_row}>
                      {transaction.category}
                      {transaction.from}
                    </th>
                    <th className={InfoModalStyle.content_row}>
                      {transaction.account}
                      {transaction.to}
                    </th>
                    <th className={InfoModalStyle.content_row}>
                      {transaction.type === "income"
                        ? (parseFloat(transaction.amount) / 100).toFixed(2)
                        : ""}
                    </th>
                    <th className={InfoModalStyle.content_row}>
                      {transaction.type !== "income"
                        ? (parseFloat(transaction.amount) / 100).toFixed(2)
                        : ""}
                    </th>
                  </tr>
                ))}
              </table>
            </div>
            <FontAwesomeIcon
              onClick={() => handleOpenTransaction(new Date())}
              className={InfoModalStyle.add_button}
              icon={faPlusCircle}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InfoModal;
