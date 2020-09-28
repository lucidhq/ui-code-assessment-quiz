import React from 'react';
import PropTypes, { InferProps } from 'prop-types'

type selected = string | null;

interface TFProps {
  selectedOption: string,
  handleChange: any,
}

const TrueFalse = ({ selectedOption, handleChange }: InferProps<TFProps>) => {
  const options: string[] = ['trueOption', 'falseOption'];


  return (
    <>
      {options.map(option => (
        <label key={option}>
          <input
            type="radio"
            name={option}
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
          {option.includes('true') ? 'true' : 'false'}
        </label>
      ))}
    </>
  )
}

TrueFalse.propTypes = {
  selectedOption: PropTypes.string,
  handleChange: PropTypes.func,
}



export default TrueFalse
