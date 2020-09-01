import React, { useState } from "react";

// TODO: Uncomment when this is being passed down
export interface QuestionProps {
  questions: Array<any>;
}

const Question: React.FC<QuestionProps> = ({ questions }) => {
  const [randomQuestion, setRandomQuestion] = useState<null | {
    correct_answer: string;
    incorrect_answers: [string];
    question: String;
    type: String;
  }>(questions[Math.floor(Math.random() * questions.length)]);

  const allAnswers =
    randomQuestion!.type !== "text"
      ? randomQuestion!.incorrect_answers.concat(randomQuestion!.correct_answer)
      : [];

  const handleClick = () => {
    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };
  return (
    <>
      <div>{randomQuestion!.question}</div>

      {randomQuestion!.type !== "text" ? (
        <form>
          {allAnswers.map((answer, i) => {
            return (
              <div key={i}>
                <input type="radio" name="answer" id={answer}></input>
                <label htmlFor={answer}> {answer}</label>
              </div>
            );
          })}
        </form>
      ) : (
        <input type="text"></input>
      )}
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default Question;
