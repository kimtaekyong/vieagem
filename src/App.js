import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import Guide from "./page/Guide";
import Gem from "./page/Gem";
import Jewelry from "./page/Jewelry";
import Wedding from "./page/Wedding";
import Hommage from "./page/Hommage";
import Pet from "./page/Pet";
import Company from "./page/Company";
import Partner from "./page/Partner";
import Terms from "./page/Terms";
import Privacy from "./page/Privacy";
import Cscenter from "./page/Cscenter";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Gem" element={<Gem />} />
        <Route path="/Jewelry" element={<Jewelry />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Hommage" element={<Hommage />} />
        <Route path="/Pet" element={<Pet />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Cscenter" element={<Cscenter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
