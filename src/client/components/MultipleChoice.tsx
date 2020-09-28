import React, { useState, Fragment } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { configureAnswers } from '../../utils/questionUtils'

const MultipleChoice = ({ answers }: any) => {
  const [value, setValue] = useState("");
  const handleChange = (e: any, { value }: any): void => {
    e.preventDefault();
    return setValue(value);
  };


  return (
    <>
      <Form>
        {/* TODO: remove the Selected Value line once all components are completed */}
        {(answers.length > 0) ?
          answers.map((a: any) => {
            return (
              <Fragment key={a}>
                <Form.Field>
                  <Radio
                    label={a}
                    name="radioGroup"
                    value={a}
                    checked={value === a}
                    onChange={handleChange}
                    />
                </Form.Field>
              </Fragment>
            );
          })
          : null}
      </Form>
    </>
  );
}

export default MultipleChoice
