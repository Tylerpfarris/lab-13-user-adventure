import { getUser } from './data/data-utils.js';


export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function isDead(user) {
    return user.hp <= 0;
}

export function loadProfile() {
    const name = document.getElementById('name');
    // const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const mugs = document.getElementById('mugs');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    // avatar.src = '../assets/avatars'
    hp.textContent = user.hp;
    mugs.textContent = user.souvenirMugs;

    if (isDead(user)) {
        hp.textContent = `YOUR DEAD SUCKA!`;
    } else {
        hp.textContent = user.hp;
    }
}

export function clearUser() {
    localStorage.setItem('USER', JSON.stringify());
}