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


export const calculatePercentage = (state) => {
  // if state is does not exist then exit
  if (!state) {
    return;
  }
  const { correct_answer } = state.currentQuestion;

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

  // the calculate the percentage based off of current questions answered and correct answers

}
