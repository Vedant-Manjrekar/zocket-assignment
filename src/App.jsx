import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/dashboard/Dashboard";
import New_Campaign from "./Components/new_campaign/New_Campaign";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <nav className="side">sidebar</nav>
      {/* Top Navbar */}
      <nav className="top">navbar</nav>

      {/* Dynamic Dashboard */}
      <div className="dashboard">
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<New_Campaign />} path="/create-campaign" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
