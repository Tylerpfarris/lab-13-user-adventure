import { findById } from '../utils.js';
import quests from '../data/data.js'; 
import { getUser } from '../data/data-utils.js';
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const form = document.querySelector('form');
const img = document.querySelector('img');
const div = document.querySelector('div');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

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
    form.append(label, div);

}

const button = document.createElement('button');
button.textContent = 'submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectionID = formData.get('choices');
    const choice = findById(quest.choices, selectionID);
    const selectionResult = formData.get('result');
    const user = getUser();
    console.log(choice[0]);
    user.hp += choice.hp;
    user.souvenirMugs += choice.souvenirMugs;
    user.completed[questId] = true;

    div.textContent = selectionResult;

    localStorage.setItem('USER', JSON.stringify(user));
    
});

