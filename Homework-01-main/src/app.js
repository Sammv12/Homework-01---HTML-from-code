// Place your DOM creation code here
const main = document.createElement('main');
document.body.appendChild(main);

const section = document.createElement('section');
main.appendChild(section);


const title = document.createElement("h1");
const titleContent = document.createTextNode("Homework 01");
title.appendChild(titleContent);
section.appendChild(title);

const p1 = document.createElement("p");
const titleP1 = document.createTextNode("For this homework, I want you to recreate this HTML page using JavaScript and " +
 "the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.");
p1.appendChild(titleP1);
section.appendChild(p1);

//I did use AI to get the <code>&lt;p&gt;</code> to work becuase I coudnt figure out how to get it to show properly
const p2 = document.createElement("p");
const before = document.createTextNode("To make it fun, and maybe a bit tricky, I've added several types of elements." +
" Some elements are pretty simple like these " );

const codeElement = document.createElement("code");
codeElement.textContent = "<p>";

const textAfterCode = " tags. Others are more going to require extra attributes or mixing text nodes with element nodes.";
const after = document.createTextNode(textAfterCode);

p2.appendChild(before);
p2.appendChild(codeElement);
p2.appendChild(after);
section.appendChild(p2);



const aside = document.createElement('aside');
document.body.appendChild(aside);

const img = document.createElement('img');
img.src = 'assets/mario.png';
aside.appendChild(img);

const blockquote = document.createElement('blockquote');
const blockquoteContent = document.createTextNode('Mario says "Wahoo!" to homework');
blockquote.appendChild(blockquoteContent);
aside.appendChild(blockquote);

const audio = document.createElement('audio');
audio.src = 'assets/Super Mario Bros. medley.mp3';
audio.controls = true;
aside.appendChild(audio);




