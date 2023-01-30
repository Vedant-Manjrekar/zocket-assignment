import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/dashboard/Dashboard";
import New_Campaign from "./Components/new_campaign/New_Campaign";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <nav className="side">
        <div className="logo nav_items">
          <img src="/public/zocket_logo.webp" alt="" />
        </div>
        <div className="home nav_items">
          <img src="/public/Frame 1.png" alt="" />
          <p className="name">Home</p>
        </div>
        <Link to="/">
          <div className="campaign nav_items">
            <img src="/public/Frame 7.png" alt="" />
            <p className="name">Campaign</p>
          </div>
        </Link>
        <div className="products nav_items">
          <img src="/public/Frame 4.png" alt="" />
          <p className="name">Products</p>
        </div>
        <div className="customers nav_items">
          <img src="/public/Frame 3.png" alt="" />
          <p className="name">Customers</p>
        </div>
      </nav>

      {/* Top Navbar */}
      <nav className="top">
        <div className="free_trial">Free trial ends in 2 days</div>
        <button className="buy_plan">
          <img src="/buy_plan.png" alt="" />
          Buy Plan
        </button>
        <div className="gift">
          <img src="/gift.png" alt="" />
        </div>
        <div className="notification">
          <img src="/notification.png" alt="" />
        </div>
        <div className="user_logo">
          <img src="/user_logo.png" alt="" />
        </div>
        <div className="user_name">Mukund cake shop</div>
        <div className="lang">
          <img src="/lang.png" alt="" />
        </div>
      </nav>

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
