const alpha = 'abcdefghijklmnopqrstuvwxyz';

export function getOffset() {
  // generate a rotation offset between 3 and 24
  return Math.round(Math.random() * 20) + 3;
}

export function rotn(str, offset) {
  if (!offset) {
    offset = 13;
  } else if (offset < 0) {
    offset += 26;
  }
  const cipher = alpha.substring(offset) + alpha.substring(0, offset);
  return str.replace(/[a-z]/gi, letter => cipher[alpha.indexOf(letter)]);
}
