import Home from "./components/Home";
import AboutPage from "./components/About";
import Tree from "./components/Tree";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App () {


  return (
    <Router>
        <div className="flex">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/tree" element={<Tree />}></Route>
      </Routes>
      </div>
    </Router>
  );
};


