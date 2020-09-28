import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { FormField, Radio } from 'semantic-ui-react'

type selected = string | null;

// interface TFProps {
//   selectedOption: string,
//   handleChange: any,
// }

const TrueFalse = () => {
  const [value, setValue] = useState<selected>('');
  const handleChange = (e: any, { value }: any): void => {
    e.preventDefault();
    return setValue(value);
  }


  return (
    <>
      <FormField>
        Selected value: <b>{value}</b>
      </FormField>
      <FormField>
        <Radio
          label="True"
          name="radioGroup"
          value="trueOption"
          checked={value === "trueOption"}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Radio
          label="False"
          name="radioGroup"
          value="falseOption"
          checked={value === "falseOption"}
          onChange={handleChange}
        />
      </FormField>
    </>
  );
}

TrueFalse.propTypes = {
  selectedOption: PropTypes.string,
  handleChange: PropTypes.func,
}


export default TrueFalse
