import React from "react";
import { render } from "@testing-library/react";
import QuestionForm from "../QuestionForm";
import QuestionContext from '../../contexts/QuestionContext'




const renderWithContext = (value) => {
  const updateQuestion = jest.fn();
  const state = {}
  return render(
    <QuestionContext.Provider value={value}>
      <QuestionForm updateQuestion={updateQuestion} state={state} />
    </QuestionContext.Provider>
  )
}


describe('QuestionForm', () => {
  test('it should render', () => {
    const stateVal = {}

    const { container } = renderWithContext()

    expect(container).toMatchSnapshot();
  })
})