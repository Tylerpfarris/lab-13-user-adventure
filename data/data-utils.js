export function saveUser(user) {
    const character = JSON.stringify(user);
    localStorage.setItem('user', character);
}

export function getUser() {
    const character = localStorage.getItem('user');
    if (!character) return null;
    const user = JSON.parse(character);
    return user;
}