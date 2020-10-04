import React, { useContext } from 'react'
import { Input } from 'semantic-ui-react'
import QuestionContext from "../contexts/QuestionContext";

const ShortAnswer = () => {
  const { currentAnswer, handleChange }: any = useContext(QuestionContext);

  return (
    <>
      <Input
        data-testid="short-answer"
        type="text"
        name="shortAnswer"
        value={currentAnswer}
        onChange={handleChange}
      />
    </>
  );
};

export default ShortAnswer
