import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { FormField, Radio } from 'semantic-ui-react'

type selected = string | null;

// interface TFProps {
//   selectedOption: string,
//   handleChange: any,
// }

const TrueFalse = ({ currentAnswer, handleChange } : any) => {
  // const [value, setValue] = useState<selected>('');
  // const handleChange = (e: any, { value }: any): void => {
  //   e.preventDefault();
  //   return setValue(value);
  // }


  return (
    <>
      <FormField>
        Selected value: <b>{currentAnswer}</b>
      </FormField>
      <FormField>
        <Radio
          label="True"
          name="radioGroup"
          value="trueOption"
          checked={currentAnswer === "trueOption"}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Radio
          label="False"
          name="radioGroup"
          value="falseOption"
          checked={currentAnswer === "falseOption"}
          onChange={handleChange}
        />
      </FormField>
    </>
  );
}

TrueFalse.propTypes = {
  currentAnswer: PropTypes.string,
  handleChange: PropTypes.func,
}


export default TrueFalse
