import React from "react";
import "./assets/scss/style.scss";
import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import PageDetails from "pages/PageDetails";
import BrowseBy from "pages/BrowseBy";
import Stories from "pages/Stories";
import Agents from "pages/Agents";
import Test from "pages/Test";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse-by" element={<BrowseBy />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/properties/:id" element={<PageDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
