import { getOffset, rotn } from "./codec.js";

(function main(document, first, last) {

  const socials = document.getElementById('socials');
  if (socials) {
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.innerText = 'email';
    const a = document.createElement('a');
    a.id = 'post';
    a.appendChild(icon);
    socials.appendChild(a);  
  }

  const offset = getOffset();
  // this is probably overkill, but hey, obfuscate away!
  const tag = rotn(['o', 't', 'l', 'i', 'a', 'm'].reverse().join(''), offset);
  const dom = rotn(['m', 'o', 'c'].reverse().join(''), offset);
  first = rotn(first.toLocaleLowerCase('en-US'), offset);
  last = rotn(last.toLocaleLowerCase('en-US'), offset);

  const post = document.getElementById('post');
  if (post) {
    post.setAttribute('href', rotn(`${tag}:${first}@${last}.${dom}`, -offset));
  }

})(document, 'Mike', 'Maughmer');
