import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { FormField, Radio } from 'semantic-ui-react'

const MultipleChoice = ({ currentAnswer, handleChange, answers }: any) => {
  // const [value, setValue] = useState("");
  // const handleChange = (e: any, { value }: any): void => {
  //   e.preventDefault();
  //   return setValue(value);
  // };

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

MultipleChoice.propTypes = {
  answers: PropTypes.array,
  handleChange: PropTypes.func,
  currentAnswer: PropTypes.string,
}

export default MultipleChoice
