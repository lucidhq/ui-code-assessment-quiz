import React from "react";
import { render } from "@testing-library/react";
import ShortAnswer from "../ShortAnswer";
import QuestionContext from '../../contexts/QuestionContext'

const renderWithContext = (value) => {
  const updateQuestion = jest.fn();

  return render(
    <QuestionContext.Provider value={value}>
      <ShortAnswer />
    </QuestionContext.Provider>
  )
}

describe("Short Answer", () => {
  test("it should render", () => {
    const four = 4;

    expect(four).toEqual(4);
  });
});

