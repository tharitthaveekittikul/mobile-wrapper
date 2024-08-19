import React, { useState } from "react";
import TabBar from "./components/TabBar";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("merchant");

  return (
    <div className="app-container">
      <header className="p-5 text-center">
        <h1 className="text-2xl font-bold">Registration Booking</h1>
        <p className="mt-2 text-sm text-red-500">
          ไม่พบสิทธิ์การจองคิวของคุณ เนื่องจากคุณยังไม่ได้ลงทะเบียน
        </p>
      </header>
      <main className="flex-grow p-5 pb-20 overflow-y-auto">
        {activeTab === "merchant" && <div>Merchant Content</div>}
        {activeTab === "qrcode" && <div>QR Code Content</div>}
        {activeTab === "profile" && <div>Profile Content</div>}
      </main>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
