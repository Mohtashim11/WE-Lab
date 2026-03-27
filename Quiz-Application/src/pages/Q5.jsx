import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Q5({ answers, setAnswers }) {
  const navigate = useNavigate(); 
  const [selectedOption, setSelectedOption] = useState(answers[4].selected);

  const options = ["90", "96", "108", "86"];

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const updated = [...answers];
    updated[4].selected = selectedOption;
    setAnswers(updated);

    navigate("/Result");
  };

  return (
    <section className="center">
      <h2>Question 5-Math</h2>
      <h3>Q: What is 12 × 8?</h3>

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

export default Q5;