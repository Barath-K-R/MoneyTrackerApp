import React, { useState, useEffect } from "react";
import DateInputModal from "../components/DateInputModal";
import { getTimelineExpenses } from "../api/TransactionApi";
import { expenseSegregator } from "../utils/expenseSegregator";
const Records = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateModalOpened, setDateModalOpened] = useState(false);

  const options = { month: "short" };
  const monthName = selectedDate?.toLocaleDateString("en-US", options);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        console.log("getting expenses");
        const { data } = await getTimelineExpenses(
          getStartAndEndDates(selectedDate)
        );
        setExpenses(expenseSegregator(data));
        console.log(expenses);
      } catch (error) {
        console.log(error);
      }
    };
    getExpenses();
  }, [selectedDate]);

  const getDayName = (date) => {
    const options = { weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  const getMonthName = (date) => {
    const options = { month: "short" };
    return date?.toLocaleDateString("en-US", options);
  };
  const getStartAndEndDates = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();

    const startDate = new Date(year, month, 1);

    const endDate = new Date(year, month + 1, 0);

    return { startDate, endDate };
  };
  return (
    <>
      <div className="flex flex-col items-center relative gap-1 pt-6 w-full">
        <div className="flex justify-evenly w-full">
          <section
            className="date flex flex-col cursor-pointer"
            onClick={() => setDateModalOpened((prev) => !prev)}
          >
            <span>{selectedDate.getFullYear()}</span>
            <span className=" text-xl font-semibold">{monthName}</span>
          </section>
          <div className="h-16 border-l-2"></div>
          <section className="expense">
            <span>Expenses</span>
          </section>
          <div className="h-16 border-l-2"></div>
          <section className="income">
            <span>Income</span>
          </section>
          <div className="h-16 border-l-2"></div>
          <section className="balance">
            <span>Balance</span>
          </section>
        </div>
        <div className="w-[95%] border-b-2"></div>
        {dateModalOpened && (
          <DateInputModal
            date={selectedDate}
            setSelectedDate={setSelectedDate}
            month={monthName}
            setDateModalOpened={setDateModalOpened}
          />
        )}
        <div className="w-full">
          {expenses.map((expense) => {
            const date = new Date(expense[0].date);
            return (
              <div className="daywise">
                <span>
                  {getMonthName(date)} {date.getDay()} {getDayName(date)}
                </span>
                {expense.map((e) => {
                  return (
                    <div className="flex justify-around">
                      <span className="font-semibold">{e.name}</span>
                      <span>{e.amount}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Records;
