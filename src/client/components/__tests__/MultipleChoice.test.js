import React from "react";
import { render } from "@testing-library/react";
import MultipleChoice from "../MultipleChoice";
import QuestionContext from '../../contexts/QuestionContext'

const renderWithContext = (value) => {
  const updateQuestion = jest.fn();

  return render(
    <QuestionContext.Provider value={value}>
      <MultipleChoice />
    </QuestionContext.Provider>
  )
}

describe("App Component test suite", () => {
  test("it should render", () => {
    const two = 2;

    expect(two).toEqual(2);
  });
});
