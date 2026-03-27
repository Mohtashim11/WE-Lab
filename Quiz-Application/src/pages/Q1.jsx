import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Q1({ answers, setAnswers }) {
  const navigate = useNavigate(); 
  const [selectedOption, setSelectedOption] = useState(answers[0].selected);

  const options = ["H2O", "O2", "CO2", "H2"];

  const handleNext = () => {

    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const updated = [...answers];
    updated[0].selected = selectedOption;

    setAnswers(updated);

    navigate("/Q2");
  };

  return (
    <section className="center">
      <h2>Question 1-Chemistry</h2>
      <h3>Q: What is the chemical symbol for water?</h3>

      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        </div>
      ))}

      <button onClick={handleNext}>Next</button>
    </section>
  );
}

export default Q1;