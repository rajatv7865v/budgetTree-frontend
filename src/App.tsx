import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Automation from "./components/Automation";
import CreateAutomation from "./components/Automation/CreateAutomation";
import Product from "./components/Product";
// import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <main>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard/type_form' element={<Automation />} />
          <Route
            path='/integrations/automation/type_form'
            element={<CreateAutomation />}
          />
          <Route path='/products' element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </main>
  );
}

export default App;
