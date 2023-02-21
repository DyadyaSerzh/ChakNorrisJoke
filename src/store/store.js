import {createStore} from 'redux';
// 1. Use Chuck Norris API to get jokes in JSON format - https://api.chucknorris.io/ 
// 2. Ability to get a random joke.
// 3. Ability to get a random joke from categories (Use API to get all available categories).
// 4. Ability to get jokes by free text search.
// 5. Any joke can be marked/unmarked as favourite.
// 6. Jokes marked as favourite should appear in the right section Favourite.
// 7. Favourite jokes should be available after reloading the page and stored in the browser
// (No need to use Back-end).

const reduser=(state={counter:0,payload:0},action)=>{
    switch (action.type){
        case 'INCREMENT':
            state.counter=state.counter+1
            return {...state};
        case 'DECREMENT':
            state.counter=state.counter-1;
            return {...state};
        case 'RESET':
            state.counter=0;
            return {...state};
        case 'GETRANDOMJOKE':
            state.payload=action.payload.value;
            return {...state};
            case 'CREATELIST':
            
            return {...state};
        default:
            return {...state};
    }
};
const store=createStore(reduser);

export default store;
