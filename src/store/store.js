import {createStore} from 'redux';

const reduser=(state=0,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        case 'RESET':
            return state=0;
        default:
            return state;
    }
};
const store=createStore(reduser);

export default store;
