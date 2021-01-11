import React from 'react';
import WeeklyStyle from "../../weeklyContainer/WeeklyStyle.module.css";


const InfoRow = () => {
    return (
        <div className={WeeklyStyle.info_row}>
            <div>
                <label className={WeeklyStyle.info_title}>Income</label>
                <div className={WeeklyStyle.income}>{(0 / 100).toFixed(2)}</div>
            </div>
            <div>
                <label className={WeeklyStyle.info_title}>Expense</label>
                <div className={WeeklyStyle.expense}>{(0 / 100).toFixed(2)}</div>
            </div>
            <div>
                <label className={WeeklyStyle.info_title}>Total</label>
                <div className={WeeklyStyle.total}>{(0 / 100).toFixed(2)}</div>
            </div>
        </div>
    );
};


export default InfoRow;