import {createStore} from 'redux';
const initialState=[1,2];
const reduser=(state=initialState)=>{

    return state;
};
const store=createStore(reduser);

export default store;
