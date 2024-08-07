import React from "react";

const DateInputModal = ({
  date,
  setSelectedDate,
  month,
  setDateModalOpened,
}) => {
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50  z-[1000]" onClick={()=>setDateModalOpened(prev=>!prev)}></div>
      <div className="flex flex-col fixed w-96 h-72 top-[25%] left-[35%] bg-white z-[1001]">
        <span className="font-bold text-xl">
          {month} {date.getFullYear()}
        </span>
        <input
          type="date"
          onChange={(e) => {
            setSelectedDate(new Date(e.target.value));
            setDateModalOpened(prev=>!prev)
          }}
        />
      </div>
    </>
  );
};

export default DateInputModal;
