import { useState } from "react";
import "./App.css";
import Login from "./views/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Chatbot } from "./views";
import { useStateContext } from "./contexts/ContextProvider.jsx";
import { MainPage, Configuration, CustomerView, Customer } from "./components";
function App() {
  localStorage.setItem("OpenAI_Configuration", true);
  localStorage.removeItem("login");
  const {
    mainPage,
    login1,
    setlogin1,
    collapsed,
    chatbot,
    setChatbot,
    selectedRole,
  } = useStateContext();

  return (
    <div>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        {!login1 ? (
          <Login />
        ) : (
          <div className="flex flex-col min-h-screen">
            <div className="fixed right-8 bottom-4" style={{ zIndex: "1000" }}>
              <button
                type="button"
                onClick={() => {
                  console.log("Button clicked!");
                  setChatbot(true);
                }}
                className="text-white text-2xl bg-blue-500 shadow-xl rounded-xl p-4"
              >
                AI Assistant
              </button>
            </div>
            {/* Navbar - Full Width at Top */}
            <div className="fixed top-0 left-0  w-full bg-[#2d325c]  z-50 shadow-md custom-navbar">
              <Navbar />
            </div>

            {/* Sidebar & Content Container (Below Navbar) */}
            <div className="flex flex-row mt-12">
              {/* Sidebar - Fixed on Left */}
              {/* {collapsed ? (
                <div className="w-25 h-screen fixed left-0 top-12 bg-[#2d325c]">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-72 h-screen fixed left-0 top-12 bg-[#2d325c]">
                  <Sidebar />
                </div>
              )} */}
              {chatbot && <Chatbot />}

              {/* Main Content - Takes Remaining Space */}
              <div
                className={`transition-all  w-full overflow-x-hidden 
                 
                }`}
              >
                <Routes>
                  {selectedRole === "employee" ? (
                    <>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/mainPage" element={<MainPage />} />
                      <Route path="/customerView" element={<CustomerView />} />
                      <Route
                        path="/configuration"
                        element={<Configuration />}
                      />
                    </>
                  ) : (
                    <Route path="/" element={<Customer />} />
                  )}
                </Routes>
                {/* Documentation routes */}
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
