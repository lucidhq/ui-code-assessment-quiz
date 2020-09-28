import React, { useState, Fragment } from 'react'
import { FormField, Radio } from 'semantic-ui-react'

const MultipleChoice = ({ answers }: any) => {
  const [value, setValue] = useState("");
  const handleChange = (e: any, { value }: any): void => {
    e.preventDefault();
    return setValue(value);
  };


  return (
    <>
      {(answers.length > 0)
        ? answers.map((a: any) => (
            <Fragment key={a}>
              <FormField>
                <Radio
                  label={a}
                  name="radioGroup"
                  value={a}
                  checked={value === a}
                  onChange={handleChange}
                />
              </FormField>
            </Fragment>
          ))
        : null}
    </>
  );
}

export default MultipleChoice
