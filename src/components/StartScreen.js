import { useQuizzes } from "../contexts/QuizContext";

function StartScreen() {
  const { questions, dispatch } = useQuizzes();
  return (
    <div className="start">
      <h2>Welcome to The GNSS Quiz!</h2>
      <h3>{questions.length} questions to test your GNSS knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
