import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
    switch (action.type) { // restricting our type with only the things available in action.types.js
        case ADD_TODO:    
            return([...state, action.payload ]);

            //Adding todo to state
            //State is an array
            //Load state: loading state values (...state)
            //action is a object consisting of many properties
            //payload is information it carries along with it (kind of baggage)
            //action.payload carries todo string here and add it to state
        
        case REMOVE_TODO:
            return(state.filter( (todo) => (todo.id !== action.payload) ));

        default:
            return state;
    }
}