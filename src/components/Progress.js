import { useQuizzes } from "../contexts/QuizContext";

function Progress({ numQuestions, maxPoints }) {
  const { index, points, answer } = useQuizzes();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
