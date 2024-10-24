import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import DynamicPage from "./DynamicPage";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":id" element={<DynamicPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
