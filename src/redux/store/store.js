import {createStore} from "redux";
import birdsReducer from "../reducers/birdsReducer";

const store = createStore(birdsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
