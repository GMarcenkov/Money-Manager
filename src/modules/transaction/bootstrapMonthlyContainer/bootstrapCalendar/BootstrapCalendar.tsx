import React, {useState} from 'react';
import CalendarDate from './BootstrapCalendarDate';
import {CalendarDates, TransactionWithAmountNumber} from '../../../../models/Transaction';
import {DaysOfWeek} from '../../../../models/Clendar';

type Props = {
  calendarDates: CalendarDates[];
  date: Date;
  transactions: TransactionWithAmountNumber[];
  handleOpenInfoModal: (date: Date) => void;
};

const BootstrapCalendar: React.FC<Props> = ({calendarDates, date, transactions, handleOpenInfoModal}) => {
  const [days] = useState([
    DaysOfWeek.MONDAY,
    DaysOfWeek.THUESDAY,
    DaysOfWeek.WEDNESDAY,
    DaysOfWeek.THURSDAY,
    DaysOfWeek.FRIDAY,
    DaysOfWeek.SATURDAY,
    DaysOfWeek.SUNDAY
  ]);

  return (
    <div className="row justify-content-center">
      <div className="row w-100">
        {days.map((day) => (
          <div key={day} className="col">
            {day}
          </div>
        ))}
      </div>
      <div className="row w-100">
        {calendarDates.map((calendarDate: {date: Date}) => (
          <CalendarDate
            calendarDate={calendarDate}
            transactions={transactions}
            date={date}
            handleOpenInfoModal={handleOpenInfoModal}
          />
        ))}
      </div>
    </div>
  );
};

export default BootstrapCalendar;