import "./App.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skillls";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project/>
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        © 2025 Akhil Singh | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
