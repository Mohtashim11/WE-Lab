import { useState } from "react";
import "./App.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="dashboard-app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="store-title">Dashboard</h1>
      </nav>

      <div className="dashboard-container">
        {/* Tabs */}
        <div className="tabs">
          {["Profile", "Settings", "Orders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "Profile" && (
            <div className="card">
              <h2>Profile Information</h2>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john@example.com</p>
              <p><strong>Role:</strong> Admin</p>
            </div>
          )}

          {activeTab === "Settings" && (
            <div className="card">
              <h2>Settings</h2>
              <p>Change Password</p>
              <p>Notification Preferences</p>
              <p>Theme: Light / Dark</p>
            </div>
          )}

          {activeTab === "Orders" && (
            <div className="card">
              <h2>Orders</h2>
              <ul>
                <li>Order #1001 – Status: Shipped</li>
                <li>Order #1002 – Status: Processing</li>
                <li>Order #1003 – Status: Delivered</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}