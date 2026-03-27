import Home from "./pages/Home.jsx"; 
import { Routes, Route, Link } from "react-router-dom"; 
import { useState } from "react";
import About from "./pages/About"; 
import Q1 from "./pages/Q1"; 
import Q2 from "./pages/Q2"; 
import Q3 from "./pages/Q3";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import Result from "./pages/Result";

function App() { 

  const [answers, setAnswers] = useState([
    { selected: "", correct: "H2O" },
    { selected: "", correct: "Asia" },
    { selected: "", correct: "Javascript" },
    { selected: "", correct: "George Washington" },
    { selected: "", correct: "96" }
  ]);

  const navLinks = [ 
    { path: "/", label: "Home" }, 
    { path: "/about", label: "About" } 
  ];

  return( 
  <> 
    <section className="center">  
      <nav> 
        {navLinks.map((link, index) => (
          <span key={index}> 
            <Link to={link.path}>{link.label}</Link> 
            {index < navLinks.length - 1 && " | "} 
          </span> 
        ))} 
      </nav>

      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 

        <Route path="/Q1" element={<Q1 answers={answers} setAnswers={setAnswers} />} /> 
        <Route path="/Q2" element={<Q2 answers={answers} setAnswers={setAnswers} />} /> 
        <Route path="/Q3" element={<Q3 answers={answers} setAnswers={setAnswers} />} /> 
        <Route path="/Q4" element={<Q4 answers={answers} setAnswers={setAnswers} />} /> 
        <Route path="/Q5" element={<Q5 answers={answers} setAnswers={setAnswers} />} /> 

        <Route path="/Result" element={<Result answers={answers} />} />   
      </Routes> 
    </section>
  </> 
  ) 
}

export default App;