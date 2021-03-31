import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Moment from "moment";
import { getYearlyOrWeekly } from "../service/TransactionService";
import { Month, TransactionReducer } from "../../../models/Transaction";
import { UserReducer } from "../../../models/User";
import NavBarMenu from "../../../layout/navBar/NavBar";
import InfoTableHead from "../components/InfoTableHead/InfoTableHead";
import YearlyTableRow from "./components/YearlyTableRow";
import styles from "./YearlyStyle.module.css";

const YearlyContainer = () => {
  const [monthsInYear, setMonthsInYear] = useState<Month[]>([]);
  const [sumIncome, setSumIncome] = useState(0);
  const [sumExpense, setSumExpense] = useState(0);

  const stateTransaction = useSelector(
    (state: {
      userReducer: UserReducer;
      transactionReducer: TransactionReducer;
    }) => state.transactionReducer
  );

  useEffect(() => {
    getYear(stateTransaction.date);
  }, [stateTransaction.date]);

  const getYear = async (date: Date) => {
    let months: Month[] = [];

    for (let i = 0; i <= 11; i++) {
      months.push({
        from: Moment(date).set("month", i).startOf("month").toDate(),
        to: Moment(date).set("month", i).endOf("month").toDate(),
        income: 0,
        expense: 0,
      });
    }

    let data = await getYearlyOrWeekly(months);

    if (Moment(date).get("year") < Moment().get("year")) {
      setMonthsInYear(data.months.reverse());
      setSumExpense(data.sumExpense);
      setSumIncome(data.sumIncome);
    }
    if (Moment(date).get("year") === Moment().get("year")) {
      setSumExpense(data.sumExpense);
      setSumIncome(data.sumIncome);
      setMonths(data.months);
    }
    if (Moment(date).get("year") > Moment().get("year")) {
      setMonthsInYear(
        data.months
          .filter((month: Month) => month.expense > 0 || month.income > 0)
          .reverse()
      );
      setSumExpense(data.sumExpense);
      setSumIncome(data.sumIncome);
    }
  };

  const setMonths = (months: Month[]) => {
    let year: Month[] = [];

    const newMonths: Month[] = months.filter(
      month => month.expense > 0 || month.income > 0
    );

    let lastMonth: number = Moment().get("month");

    if (
      newMonths.length > 0 &&
      lastMonth < Moment(newMonths[newMonths.length - 1].from).get("month")
    ) {
      lastMonth = Moment(newMonths[newMonths.length - 1].from).get("month");
    }

    for (let i = 0; i <= lastMonth; i++) {
      if (
        newMonths.filter(month => Moment(month.from).get("month") === i)
          .length > 0
      ) {
        year.push(
          newMonths.filter(month => Moment(month.from).get("month") === i)[0]
        );
      } else {
        year.push({
          from: Moment().startOf("month").set("month", i).toDate(),
          to: Moment().endOf("month").set("month", i).toDate(),
          income: 0,
          expense: 0,
        });
      }
    }

    setMonthsInYear(year.reverse());
  };

  return (
    <div className={styles.wrapper}>
      <NavBarMenu />
      <div className={styles.container}>
        <table className={styles.table}>
          <InfoTableHead sumIncome={sumIncome} sumExpense={sumExpense} />
          <tbody>
            {monthsInYear.map(month => (
              <YearlyTableRow month={month} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YearlyContainer;