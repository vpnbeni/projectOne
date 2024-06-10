import DataFetcher from "./components/DataFetcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
