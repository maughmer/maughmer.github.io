import { getOffset, rotn } from "./codec.js";

(function main(document, first, last) {

  const offset = getOffset();
  // this is probably overkill, but hey, obfuscate away!
  const dom = rotn(['m', 'o', 'c'].reverse().join(''), offset);
  first = rotn(first.toLocaleLowerCase('en-US'), offset);
  last = rotn(last.toLocaleLowerCase('en-US'), offset);

  const post = document.getElementById('post');
  if (post) {
    post.textContent = rotn(`${first}@${last}.${dom}`, -offset);
  }

})(document, 'Mike', 'Maughmer');
