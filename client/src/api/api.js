import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: baseURL,
});

export const getAllCategories = () => api.get('/expense/allcategories');

export const addExpense = (expense) => api.post('/expense', expense);

export const getTimeLineExpenses = (filterdates) => api.get('/expense/timelinexpenses', { params: filterdates });
