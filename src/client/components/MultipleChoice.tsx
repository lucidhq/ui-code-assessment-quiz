import React, { useContext } from 'react'
import { FormField, Radio } from 'semantic-ui-react'
import QuestionContext from '../contexts/QuestionContext'


const MultipleChoice = () => {
  const { currentAnswer, handleChange, state }: any = useContext(QuestionContext);
  const { answers } = state;

  return (
    <>
      {answers.length > 0
        ? answers.map((answer: any) => (
            <FormField data-testid="multiple-choice-answer" key={answer}>
              <Radio
                data-testid="radio-btn"
                label={answer}
                name="radioGroup"
                value={answer}
                checked={currentAnswer === answer}
                onChange={handleChange}
              />
            </FormField>
          ))
        : null}
    </>
  );
};

export default MultipleChoice
