// TODO: add typings for utility methods

export const unescapeStr = (str) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body.textContent;
}

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

