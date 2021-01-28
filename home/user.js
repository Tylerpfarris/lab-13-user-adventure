export function createUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        hp: 50,
        souvenirMugs: 0,
        completed: {}
    };

    return user;
}

export const newCreateUser = (formData) => ({
    name: formData.get('name'),
    character: formData.get('character'),
    hp: 50,
    souvenirMugs: 0,
    completed: {}
});


