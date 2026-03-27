import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Q4({ answers, setAnswers }) {
  const navigate = useNavigate(); 
  const [selectedOption, setSelectedOption] = useState(answers[3].selected);

  const options = ["Thomas Jefferson", "Abraham Lincoln", "John Adams", "George Washington"];

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const updated = [...answers];
    updated[3].selected = selectedOption;
    setAnswers(updated);

    navigate("/Q5");
  };

  return (
    <section className="center">
      <h2>Question 4-History</h2>
      <h3>Q: Who was the first president of the United States?</h3>

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

export default Q4;