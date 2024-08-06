import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddExpense from './pages/addNewExpense/AddExpense'

import Header from './components/Header';
function App() {
  return(
  <div className="app">
        <BrowserRouter>
           <Header />
           <div className="main-container">
          <Routes>
            <Route path='/'/>
            <Route path='/addNewExpense' element={<AddExpense />}/>
            <Route path='/dashboard' />
          </Routes>
           </div>
           
      </BrowserRouter>
  </div>
  );
}

export default App;
