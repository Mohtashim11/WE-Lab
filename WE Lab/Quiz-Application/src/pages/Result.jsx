import { useNavigate } from "react-router-dom";

function Result({ answers }) {

  const score = answers.reduce((acc, curr) => {
    return curr.selected === curr.correct ? acc + 1 : acc;
  }, 0);

  return (
    <div className="center">
      <h2>Your Score: {score} / {answers.length}</h2>
    </div>
  );
}

export default Result;