import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/*" element={ <h1>Page no found!</h1>} />
      </Routes>
    </Router>
  );
}
  
export default App;
