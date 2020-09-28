import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

const ShortAnswer = () => {
  // TODO refactor this functionality into one hook or one method to pass into the form
  const [value, setValue] = useState('');
  const handleChange = (e: any, { value }: any): void => {
    setValue(value);
  }

  return (
    <>
      <Input type="text" name="shortAnswer" value={value} onChange={handleChange} />
    </>
  )
}

export default ShortAnswer
