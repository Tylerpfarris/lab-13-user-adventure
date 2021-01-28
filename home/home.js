import { saveUser } from '../data/data-utils.js';
import { createUser } from '../home/user.js';



const userSignIn = document.getElementById('user-sign-in');

userSignIn.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userSignIn);

    const user = createUser(formData);

    saveUser(user);
       
    window.location = './roadMap';
});
