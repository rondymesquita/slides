import yaml from 'js-yaml';
import * as markdownit from 'markdown-it';

export const parseFrontMatter = (value: string) => {
  const regex = /---((.|\s)*)---/;
  if (regex.test(value)) {
    console.log('true');
    const res = regex.exec(value);
    console.log('true', res?.length);
    console.log(res[1].trim());
    if (res && res.length) {
      // console.log(res[1]);
      const v = res[1].trim().replaceAll(' ', '');
      console.log(v);
      return yaml.load(v);
    }
  }
};

export const extractFrontMatter = (tokens: any) => {
  // const tokens = md.parse(src);
  let startIndex = -1;
  let endIndex = -1;
  let shouldPush = false;
  const arr = [];
  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    if (token.type === 'hr' && startIndex === -1) {
      startIndex = index;
      shouldPush = true;
      continue;
    }

    if (shouldPush) {
      arr.push(token);
    }

    if (token.type === 'hr' && startIndex !== -1) {
      endIndex = index;
      shouldPush = false;
      break;
    }
  }

  return arr;
};
