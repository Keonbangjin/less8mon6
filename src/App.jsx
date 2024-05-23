import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = React.lazy(()=> import("./pages/Home"));
const About = React.lazy(()=> import("./pages/About"));
const Contact = React.lazy(()=> import("./pages/Contact"));
const Shop = React.lazy(()=> import("./pages/Shop"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
