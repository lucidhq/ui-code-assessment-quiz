import React, { useContext, Fragment } from 'react'
import { FormField, Radio } from 'semantic-ui-react'
import QuestionContext from '../contexts/QuestionContext'


const MultipleChoice = () => {
  const { currentAnswer, handleChange, state }: any = useContext(QuestionContext);
  const { answers } = state;
  
  return (
    <>
      {answers.length > 0
        ? answers.map((answer: any) => (
            <Fragment key={answer}>
              <FormField>
                <Radio
                  label={answer}
                  name="radioGroup"
                  value={answer}
                  checked={currentAnswer === answer}
                  onClick={handleChange}
                />
              </FormField>
            </Fragment>
          ))
        : null}
    </>
  );
};

export default MultipleChoice
