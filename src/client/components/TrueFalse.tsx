import React, {  useContext } from 'react'
import { FormField, Radio } from 'semantic-ui-react'
import QuestionContext from '../contexts/QuestionContext'


const TrueFalse = () => {
  const { currentAnswer, handleChange }: any = useContext(QuestionContext)

  return (
    <>
      <FormField>
        <Radio
          data-testid="radio-btn"
          label="True"
          name="radioGroup"
          value="True"
          checked={currentAnswer === "True"}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Radio
          label="False"
          name="radioGroup"
          value="False"
          checked={currentAnswer === "False"}
          onChange={handleChange}
        />
      </FormField>
    </>
  );
}

export default TrueFalse
