import { findById } from '../utils.js';
import quests from '../data/data.js'; 
import { getUser, saveUser } from '../data/data-utils.js';
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const form = document.querySelector('form');
const img = document.querySelector('img');
const div = document.querySelector('div');
const span = document.querySelector('span');

const params = new URLSearchParams(window.location.search);

export const questId = params.get('id');

const quest = findById(quests, questId);
h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;


for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');
    
    span.textContent = choice.description;
    
    
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);
    form.append(label);
    p.appendChild(div);
    
}


const button = document.createElement('button');
button.textContent = 'submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const selectionID = formData.get('choices');
    const choice = findById(quest.choices, selectionID);
  
    const user = getUser();
    
    user.hp += choice.hp;
    user.souvenirMugs += choice.souvenirMugs;
    user.completed[questId] = true;


    
    div.textContent = choice.result;
    form.textContent = '';
   
    
    saveUser(user);
    
});






const backButton = document.createElement('button');
backButton.classList.add('back-button');
span.append(backButton);
backButton.textContent = 'back on the road';

backButton.addEventListener('click', () => {
   
    window.location = '../roadMap';
    
});