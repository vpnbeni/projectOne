import DataFetcher from "./components/DataFetcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from './components/Test';
function App() {
  return (
    <Router>
      <div className="App ">
        <div className="App-header">
          <div>Data Fetching Example</div>
        </div>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<DataFetcher />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
