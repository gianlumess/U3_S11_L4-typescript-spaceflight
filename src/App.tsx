import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Detail from "./pages/Detail";

function App() {
  const [articles, SetArticles] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home articles={articles} setArticles={SetArticles} />} />
        <Route path="/article/:articleId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
