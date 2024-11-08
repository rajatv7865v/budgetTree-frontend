import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Automation from "./components/Automation";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard/type_form' element={<Automation />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
