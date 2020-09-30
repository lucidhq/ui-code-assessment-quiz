// TODO: add typings for utility methods

// reformats chars that are HTML entities so questions and answers are rendered appropriately
export const unescapeStr = (str) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body.textContent;
}

// randomize order of both questions from the server, and answers for multiple choice.
export const shuffle = (arr) => {
  const copy = arr.slice();

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// take in the original question and return a new array of answers to map over in component
export const configureAnswers = (question) => {
  const { correct_answer, incorrect_answers } = question;
  const answers = [correct_answer, ...incorrect_answers];
  const unescapedAnswers = answers.map((a) => unescapeStr(a));

  return shuffle(unescapedAnswers);
}


export const calculatePercentage = (num1, total) => {
  if (num1 === 0) {
    return 0;
  }

  return Math.round((num1 / total) * 100);
}

export const evaluateAnswers = (state) => {
  // if state is does not exist then exit
  if (!state) {
    return;
  }
  const { correct_answer } = state.currentQuestion;
  const totalAnswered = state.questionsAnswered + 1;
  // rename this
  const payload = {
    correctAnswers: state.correctAnswers,
    incorrectAnswers: state.incorrectAnswers,
    finalScorePercentage: state.finalScorePercentage,
  }
  // try and eliminate this conditional sequence
  let answer;
  // check for trueOption and falseOption
  if (state.currentAnswer === 'falseOption') {
    answer = 'False';
  } else if (state.currentAnswer === 'trueOption') {
    answer = 'True'
  } else {
    answer = state.currentAnswer;
  }
  // check if answer is correct
  // edit this to be cleaner before submission
  if (answer === correct_answer) {
    payload.correctAnswers = state.correctAnswers + 1;
  } else {
    payload.incorrectAnswers = state.incorrectAnswers + 1;
  }
  // the calculate the percentage based off of current questions answered and correct answers
  const updatedPercentage = calculatePercentage(payload.correctAnswers, totalAnswered);
  // add totalPercentage to payload and the return the payload
  payload.finalScorePercentage = updatedPercentage;
  return payload
}

