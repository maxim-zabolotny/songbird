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
            let selected = state.birds[state.birdCategory][action.id-1]
            return {...state, selectedBird: selected}
        }
        default: return state
    }
}

export default birdsReducer
