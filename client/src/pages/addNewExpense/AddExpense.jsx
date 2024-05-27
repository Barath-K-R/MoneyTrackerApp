import React, { useState, useEffect } from "react";
import "../../styles/AddExpense.scss";
import { addExpense, getAllCategories } from "../../api/api";
const AddExpense = () => {
  const [expense, setexpense] = useState({
    category: "",
    description: "",
    amount: "",
    date: new Date(),
  });
  const [newCategory, setnewCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories.data);
    };
    getCategories();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value)
    if (e.target.value === "other") {
      console.log("other")
      setnewCategory((prev) => !prev);
    }
    setexpense((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    await addExpense(expense);
  };
  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="category input">
          <label htmlFor="category">Category</label>
          {newCategory || categories.length === 0 ? (
            <input type="text" name="category" onChange={handleChange} />
          ) : (
            <select value={expense.category} onChange={handleChange}>
              {categories.map((item) => {
                return <option key={item} value={item}>{item} </option>;
              })}
              <option value="other">other</option>
            </select>
          )}
        </div>
        <div className="description input">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={handleChange} />
        </div>
        <div className="amount input">
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" onChange={handleChange} />
        </div>
        <div className="date input">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" onChange={handleChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
