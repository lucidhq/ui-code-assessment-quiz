import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { Form, Radio } from 'semantic-ui-react'

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
      <Form>
        {/* TODO: remove the Selected Value line once all components are completed */}
        <Form.Field>
          Selected value: <b>{value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label="true"
            name="radioGroup"
            value="trueOption"
            checked={value === "trueOption"}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="false"
            name="radioGroup"
            value="falseOption"
            checked={value === "falseOption"}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </>
  );
}

TrueFalse.propTypes = {
  selectedOption: PropTypes.string,
  handleChange: PropTypes.func,
}


export default TrueFalse
