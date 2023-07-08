import { useQuizzes } from "../contexts/QuizContext";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

export default function App() {
  const { questions, status, index } = useQuizzes();

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress numQuestions={numQuestions} maxPoints={maxPoints} />
            <Question question={questions[index]} />
            <Footer>
              <Timer />
              <NextButton numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen maxPoints={maxPoints} />}
      </Main>
    </div>
  );
}
