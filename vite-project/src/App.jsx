// import React from 'react';
import DataFetcher from "./components/DataFetcher";
import Flip from './components/Flip1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App ">
        <div className="App-header">
          <div className="text-center">Data Fetching Example</div>
        </div>
        <div className="App-content">
        <Routes>

        <Route path="/" element={<DataFetcher />} />
        <Route path="/flip" element={<Flip />} />
      </Routes>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
