const htmlUnescapes: any = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
};

const reEscapedHtml = /&(?:amp|lt|gt|quot|#039);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

export const unescape = (encodedStr: string) => {
  return encodedStr && reHasEscapedHtml.test(encodedStr)
    ? encodedStr.replace(reEscapedHtml, (entity) => htmlUnescapes[entity])
    : encodedStr;
};

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const percentage = (num: number, per: number) => (num / per) * 100;
