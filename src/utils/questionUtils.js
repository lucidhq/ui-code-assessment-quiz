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
  // exit case for text questions
  if (question.type === 'text') {
    return;
  }

  const { correct_answer, incorrect_answers } = question;
  const answers = [correct_answer, ...incorrect_answers];
  const unescapedAnswers = answers.map((a) => unescapeStr(a));

  return shuffle(unescapedAnswers);
}

export const calculatePercentage = (num1, total) => {
  // exit condition
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
  const payload = {
    correctAnswers: state.correctAnswers,
    incorrectAnswers: state.incorrectAnswers,
    finalScorePercentage: state.finalScorePercentage,
  }
  // added lowercase transformation for text input inconsistencies
  if (state.currentAnswer.toLowerCase() === correct_answer.toLowerCase()) {
    payload.correctAnswers += 1;
  } else {
    payload.incorrectAnswers += 1;
  }

  const updatedPercentage = calculatePercentage(payload.correctAnswers, totalAnswered);

  payload.finalScorePercentage = updatedPercentage;

  return payload;
}
