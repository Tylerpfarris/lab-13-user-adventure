import { getUser } from '../data/data-utils.js';
// import quests from '../data/data.js';
import questData from '../data/data.js';
const div = document.querySelector('div');
div.classList.add('road-map');
const ul = document.querySelector('ul');
const user = getUser();

let completedAllQuests = true;

for (let quest of questData) {
    if (!user.completed[quest.id]){
        completedAllQuests = false;
    }
}


if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}


for (let quest of questData) {
    const li = document.createElement('li');
    li.classList.add('pit-stops');
    const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    
    li.append(a);
    ul.append(li);
}
