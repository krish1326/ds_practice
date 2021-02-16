import {createStore} from 'https://unpkg.com/redux@4.0.5/es/redux.mjs';
const InitialState ={
    buttonClicked:false,
    isDivVisible:false
}
const BUTTON_CLICKED="BUTTON_CLICKED";
const DIVVISIBLE = "DIVVISIBLE"
 function rootReducer(state=InitialState,action){
     console.log(action)
    switch(action.type){
        case BUTTON_CLICKED:{
            return {...state,buttonClicked:true}
        }
        case DIVVISIBLE:
            return {...state,isDivVisible:true}
        
        default: return state;
    }
 }
const store = createStore(rootReducer);
/**
 * the functions buttonclicked and divVisible are action creators 
 * which would return js objects which are used to state change
 */
function buttonClicked(){
    return {
        type:BUTTON_CLICKED
    }
}
function divVisible(){
    return {
        type:DIVVISIBLE
    }
}
document.getElementById("button").addEventListener('click',()=>{
     store.dispatch(buttonClicked());
     store.dispatch(divVisible())
});

 store.subscribe(()=>{
     console.log(store.getState());
     if(store.getState().isDivVisible){
         document.getElementById("my-div").style.display = 'block';
     }
 })

 //action creators and named actions 
 /**
  * action creators:
  * action creators are functions which return js objects which are meant to cause the 
  * change of state in the app.
  * 
  * named actions:
  * these are the actions which are named and stored as constants to prevent errors 
  * due to typo.
  */