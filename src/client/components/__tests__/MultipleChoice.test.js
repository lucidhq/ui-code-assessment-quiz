import React from 'react';
import { render } from '@testing-library/react';
import MultipleChoice from '../MultipleChoice';
import QuestionContext from '../../contexts/QuestionContext'

const renderWithContext = (value) => {
  return render(
    <QuestionContext.Provider value={value}>
      <MultipleChoice />
    </QuestionContext.Provider>
  )
}

let contextValue = {
  currentAnswer: '',
  handleChange: jest.fn(),
  state: {
    answers: ['4', '3', '2', '5']
  },
};


describe('Multiple Choice', () => {
  test('it should render', () => {
    const { container } = renderWithContext(contextValue);

    expect(container).toMatchSnapshot();
  });

  test('it should contain four different answer choices', () => {
    const { getAllByTestId, debug } = renderWithContext(contextValue);
    const radioNodeList = getAllByTestId('multiple-choice-answer')

    expect(radioNodeList.length).toBe(4);
    expect(radioNodeList[0].textContent).toBe('4');
    expect(radioNodeList[1].textContent).toBe('3');
    expect(radioNodeList[2].textContent).toBe('2');
    expect(radioNodeList[3].textContent).toBe('5');
  });

  test('it should not render when given an empty array of answers', () => {
    contextValue.state.answers = [];

    const { container } = renderWithContext(contextValue);

    expect(container).toBeEmptyDOMElement;
  });

});
