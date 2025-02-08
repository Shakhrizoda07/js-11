const user = prompt ('text rangini tanlang');
const nameElement = document.createElement('p');

let text_color = document.querySelector('#lorem_text');
nameElement.textContent = user;

text_color.style.color = user;
nameElement.style.color = 'user';
nameElement.style.fontWeight ='bold';

document.body.appendChild(nameElement);