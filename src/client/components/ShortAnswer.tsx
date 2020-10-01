import React, { useContext } from 'react'
import { Input } from 'semantic-ui-react'
import QuestionContext from "../contexts/QuestionContext";

// { currentAnswer, handleChange }: any
const ShortAnswer = () => {
  const { currentAnswer, handleChange }: any = useContext(QuestionContext);

  return (
    <>
      <Input
        type="text"
        name="shortAnswer"
        value={currentAnswer}
        onChange={handleChange}
      />
    </>
  );
};

export default ShortAnswer
