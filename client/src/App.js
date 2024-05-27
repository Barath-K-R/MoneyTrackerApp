import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddExpense from './pages/addNewExpense/AddExpense'
import DashBoard from './pages/dashboard/DashBoard';
import MenuBar from './components/MenuBar';
import './styles/App.scss'
import Header from './components/Header';
function App() {
  return(
  <div className="app">
        <BrowserRouter>
           <Header />
           <div className="main-container">
           <MenuBar />
          <Routes>
            <Route path='/' element={<DashBoard />}/>
            <Route path='/addNewExpense' element={<AddExpense />}/>
            <Route path='/dashboard' element={<DashBoard />}/>
          </Routes>
           </div>
           
      </BrowserRouter>
  </div>
  );
}

export default App;
