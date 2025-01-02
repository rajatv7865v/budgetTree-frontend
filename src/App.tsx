import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Automation from "./components/Automation";
import CreateAutomation from "./components/Automation/CreateAutomation";
import Product from "./components/Product";
import SignIn from "./components/auth/SignIn";
import { Toaster } from "react-hot-toast";
// import { ThemeProvider } from "@material-tailwind/react";

function App() {
  console.log("env", process.env.REACT_APP_API_URL);
  return (
    <main>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route
            path='/integration-dashboard/manage-integration'
            element={<Dashboard />}
          />
          <Route
            path='/integrations/dashboard/:connector-type'
            element={<Automation />}
          />
          <Route
            path='/integrations/automation/:connector-type'
            element={<CreateAutomation />}
          />
          <Route path='/products' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
