import React from "react";
import Home1 from "pages/Home1";
import Items from "pages/Items";
import Orders from "pages/Orders";
import Vender from "pages/Vender";
import Shipnotice from "pages/Shipnotice";
import Invoices from "pages/Invoices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/shipnotice" element={<Shipnotice />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/items" element={<Items />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
