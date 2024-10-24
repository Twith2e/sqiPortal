import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import DynamicPage from "./DynamicPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path=":id" element={<DynamicPage />} />
      </Route>
    </Routes>
  );
}

export default App;
