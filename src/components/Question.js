import Options from "./../components/Options.js";

function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question}></Options>
    </div>
  );
}

export default Question;
