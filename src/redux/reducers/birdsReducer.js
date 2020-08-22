import birdsData from "../../birds";
import {SET_SELECTED_BIRD} from "../actions/actions-types";

const randomBird = Math.floor(Math.random()*6)

const initialState = {
    birds: [...birdsData],
    birdCategory: 0,
    score: 0,
    secretBird: birdsData[0][randomBird],
    selectedBird: null,
    attemptCount: 0,
    guessed: false,
    gameOver: false,
    birdGroup: birdsData[0],
}

const birdsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_BIRD: {
            return {...state, selectedBird: action.id}
        }
        default: return state
    }
}

export default birdsReducer
