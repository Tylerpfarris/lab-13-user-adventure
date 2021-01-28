export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('USER', json);
}

export function getUser() {
    const json = localStorage.getItem('USER');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;


}