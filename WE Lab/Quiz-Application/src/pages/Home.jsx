import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
    // you can use navigate programmatically 
    const navigate = useNavigate(); 
    // dynamic nav links (just update this array to add new pages) 
    
    return (
        <section className="center">
            
            <p>Welcome To Quiz Application</p>
            <button onClick={() => navigate("/Q1")}> 
                Start Quiz 
            </button>
        </section>
    );
}

export default Home;