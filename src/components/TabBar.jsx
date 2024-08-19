import React from "react";
import { FaStore, FaQrcode, FaUser } from "react-icons/fa";
import "./TabBar.css";

const TabItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    className={`flex flex-col items-center justify-center flex-1 py-2 ${
      isActive ? "text-blue-500" : "text-gray-500"
    }`}
    onClick={onClick}
  >
    <Icon className="text-2xl mb-1" />
    <span className="text-xs">{label}</span>
  </button>
);

const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-bar">
      <TabItem
        icon={FaStore}
        label="Merchant"
        isActive={activeTab === "merchant"}
        onClick={() => setActiveTab("merchant")}
      />
      <TabItem
        icon={FaQrcode}
        label="QR Code"
        isActive={activeTab === "qrcode"}
        onClick={() => setActiveTab("qrcode")}
      />
      <TabItem
        icon={FaUser}
        label="Profile"
        isActive={activeTab === "profile"}
        onClick={() => setActiveTab("profile")}
      />
    </div>
  );
};

export default TabBar;
