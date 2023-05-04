import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ReactProjects from "./components/ReactProjects/ReactProjects";
import JavaScriptProjects from "./components/JavascriptProjects/JavaScriptProjects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
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
