import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Q3({ answers, setAnswers }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(answers[2].selected);

  const options = ["Python", "Javascript", "C++", "Java"];

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const updated = [...answers];
    updated[2].selected = selectedOption;
    setAnswers(updated);

    navigate("/Q4");
  };

  return (
    <section className="center">
      <h2>Question 3-Technology</h2>
      <h3>Q: Which language is primarily used for web development?</h3>

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

export default Q3;