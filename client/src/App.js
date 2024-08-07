import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddExpense from './pages/addNewExpense/AddExpense'
import MenuBar from './components/MenuBar';
import Header from './components/Header';
import Records from './pages/Records';
function App() {
  return(
  <div className="app">
        <BrowserRouter>
           <Header />
           <div className="flex">
            <MenuBar />
          <Routes>
            <Route path='/' element={<Records />}/>
            <Route path='/addNewExpense' element={<AddExpense />}/>
            <Route path='/records' element={<Records />}/>
          </Routes>
           </div>
           
      </BrowserRouter>
  </div>
  );
}

export default App;
