// import { findById } from '../utils.js';
// import { getUser, saveUser } from '../data/data-utils.js';
// import questId from './quest.js';
// import quest from '../data/data.js';
// import div from './quest.js';
// import form from './quest.js';

// export function submitChoiceFunc() {
//     const formData = new FormData(form);
    
//     const selectionID = formData.get('choices');
//     const choice = findById(quest.choices, selectionID);
  
//     const user = getUser();
    
//     user.hp += choice.hp;
//     user.souvenirMugs += choice.souvenirMugs;
//     user.completed[questId] = true;


    
//     div.textContent = choice.result;
//     form.textContent = '';
   
    
//     saveUser(user);
//     return user;
// }