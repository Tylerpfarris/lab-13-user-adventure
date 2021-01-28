
import { finalMugs, finalHp } from './result-utils.js';
import { getUser } from '../data/data-utils.js';
import { loadProfile, clearUser } from '../utils.js';
import { aliveMugMessages, deadMugMessages, hpMessages } from './messages.js';

loadProfile();

const user = getUser();

const endStory = document.getElementById('end-story-display');

const hpResult = finalHp(user.hp);
const mugResult = finalMugs(user.hp);
const hpMessage = hpMessages[hpResult];

let mugMessages = null;
if (hpResult === 'dead') {
    mugMessages = deadMugMessages;
} else {
    mugMessages = aliveMugMessages;
}

const mugMessage = mugMessages[mugResult];

let story = `Way to go ${user.name}`;
story += user.name + `playing as` + user.character + `,`;
story += hpMessage + `and ` + mugMessage + `.`;

endStory.textContent = story;

const startOverButton = document.getElementById('start-over');
startOverButton.addEventListener('click', () => {
    clearUser();
    window.location = '../';
});