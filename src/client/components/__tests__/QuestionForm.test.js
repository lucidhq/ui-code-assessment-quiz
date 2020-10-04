import React from "react";
import { render } from "@testing-library/react";
import QuestionForm from "../QuestionForm";
import QuestionContext from '../../contexts/QuestionContext'
import { questionData, shortAnswerData } from '../../../data/questionData'

const renderWithContext = (value, props) => {
  return render(
    <QuestionContext.Provider value={value}>
      <QuestionForm {...props} />
    </QuestionContext.Provider>
  );
}

let contextValue;
let props;

beforeEach(() => {
  contextValue = {
    currentAnswer: '',
    handleChange: jest.fn(),
    state: {
      answers: ['4', '3', '2', '5']
    },
  };

  props = {
    updateQuestion: jest.fn(),
    state: {
      currentQuestion: questionData[0],
      currentAnswer: '',
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionsAnswered: 0,
      finalScorePercentage: 0,
      isSummaryVisible: false,
    },
  };
});

describe('QuestionForm', () => {
  test('it should render', () => {
    const { container } = renderWithContext(contextValue, props);

    expect(container).toMatchSnapshot();
  });

  test('it should render a Multiple Choice question', () => {
    const { getByTestId } = renderWithContext(contextValue, props);
    const multipleChoiceQuestion = getByTestId('multiple');

    expect(multipleChoiceQuestion).toBeInTheDocument;
  });

  test('it should render a True/False question', () => {
    props.state.currentQuestion = questionData[1];

    const { getByTestId } = renderWithContext(contextValue, props);
    const trueFalseQuestion = getByTestId('boolean');

    expect(trueFalseQuestion).toBeInTheDocument;
  });

  test('it should render a Short Answer question', () => {
    props.state.currentQuestion = shortAnswerData[0];

    const { getByTestId } = renderWithContext(contextValue, props);
    const shortAnswerQuestion = getByTestId('text');

    expect(shortAnswerQuestion).toBeInTheDocument;
  });

  test('it should render the Summary page', () => {
    props.state.isSummaryVisible = true;

    const { getByTestId } = renderWithContext(contextValue, props);
    const summaryPage = getByTestId('summary');

    expect(summaryPage).toBeInTheDocument;
  });

});
