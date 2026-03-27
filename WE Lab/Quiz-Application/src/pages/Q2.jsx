import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Q2({ answers, setAnswers }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(answers[1].selected);

  const options = ["Asia", "Africa", "Europe", "North America"];

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const updated = [...answers];
    updated[1].selected = selectedOption;
    setAnswers(updated);

    navigate("/Q3");
  };

  return (
    <section className="center">
      <h2>Question 2-Geography</h2>
      <h3>Q: Which is the largest continent by area?</h3>

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

export default Q2;