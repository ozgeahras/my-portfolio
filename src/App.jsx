import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import ReactProjects from "./components/ReactProjects";
import JavaScriptProjects from "./components/JavaScriptProjects";
import About from "./components/About";
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
    </div>
  );
}

export default App;
