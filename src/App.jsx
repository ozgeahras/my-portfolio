import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import ReactProjects from "./components/ReactProjects/ReactProjects.jsx";
import JavaScriptProjects from "./components/JavaScriptProjects/JavaScriptProjects.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactProjects />} />
          <Route path="/javascript" element={<JavaScriptProjects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
