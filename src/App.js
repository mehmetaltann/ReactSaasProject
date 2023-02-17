import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layouts/Footer";
import Iletisim from "./pages/Iletisim";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Iletisim />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
