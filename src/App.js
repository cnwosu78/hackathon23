// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
// import Chart from './components/Untitled1.png';

function App() {  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          {/* <Route path="/chart" element={ <Chart />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
