import { TodoItem } from "./components/TodoItem";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Authorization";
import { Route, Routes } from "react-router-dom";
import { Todos } from "./pages/Todos";
import { Context } from "./context";

export const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
 
  );
};
