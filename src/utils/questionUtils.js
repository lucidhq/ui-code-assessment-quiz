// TODO: add typings for utility methods

export const unescapeStr = (str) => {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body.textContent;
}

