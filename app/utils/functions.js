import { each, omit } from 'lodash';

export const parseDate = (date) => {
  const parsedDate = new Date(date);
  let parseMonth = parsedDate.getMonth();
  parseMonth += 1;
  if (parseMonth < 10) {
    parseMonth = `0${parseMonth}`;
  }
  return `${parseMonth}-${parsedDate.getDate()}-${parsedDate.getFullYear()}`;
};

export const renameKey = (object, map) => {
  const returnedObject = each(object, (value, key) => {
    let newKey = key;
    const newObject = object;
    newKey = map[newKey] || newKey;
    newObject[newKey] = value;
  });
  return omit(returnedObject, Object.keys(map));
};

export function noWhitespace() {
  return this.test({
    name: 'noWhitespace',
    message: 'This field cannot contain only blankspaces',
    test: (value) => (/^[ ]*$/.test(value) ? NaN : value),
  });
}
