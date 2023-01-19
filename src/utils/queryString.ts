/* eslint-disable no-useless-escape */
const keyValRegExp = /(?<key>[^\=\&]+)(?:\=)(?<value>[^\=\&]*)/;

const removeQM = (str: string) => {
  if (str.length > 0 && str[0] === '?') {
    return str.slice(1);
  }
  return str;
};

export const queryStrToJSON = (str: string) => {
  const decodedStr = removeQM(decodeURI(str));
  const splitedStr = decodedStr.split('&');

  return splitedStr.reduce((pre, cur) => {
    const { key, value } = keyValRegExp.exec(cur)?.groups ?? { key: '', value: '' };
    const next = { ...pre };
    next[key] = value;

    return next;
  }, {} as { [key: string]: string });
};
