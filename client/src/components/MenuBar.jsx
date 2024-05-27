import React from "react";

import { BsBarChartLineFill } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { HiBuildingLibrary } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import "../styles/MenuBar.scss";
const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="menubar-container">
      <ul>
        <li
          className="dashboard list"
          onClick={() => {
            navigate("/");
          }}
        >
          <HiBuildingLibrary />
          <span>Home</span>
        </li>

        <li
          className="dashboard list"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <BsBarChartLineFill />
          <span>Dashboard</span>
        </li>
        <li
          className="addnew list"
          onClick={() => {
            navigate("addNewExpense");
          }}
        >
          <CgAdd />
          <span>Add Expense</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
