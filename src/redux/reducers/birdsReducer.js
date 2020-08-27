import birdsData from "../../birds";
import {
    SET_CORRECT_ANSWER,
    SET_INCORRECT_ANSWER, SET_NEXT_GAME, SET_NEXT_LEVEL,
    SET_SELECTED_BIRD
} from "../actions/actions-types";

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
    clicked: []
}

const birdsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_BIRD: {
            let selected = state.birds[state.birdCategory][action.id-1]
            return {...state, selectedBird: selected}
        }
        case SET_CORRECT_ANSWER: {
            if(!state.guessed) {
                let score = (state.score + 5 - state.attemptCount > 0)
                    ? state.score + 5 - state.attemptCount
                    : 0;

                return {
                    ...state,
                    score: score,
                    guessed: true
                }
            } else { return state }
        }
        case SET_INCORRECT_ANSWER: {
            if(!state.clicked.includes(action.birdName)) {
                let attemptCount = state.attemptCount > 5 ? 5 : ++state.attemptCount;
                return {
                    ...state,
                    attemptCount: attemptCount,
                    clicked: [...state.clicked, action.birdName]

                }
            } else {return state}
        }
        case SET_NEXT_LEVEL:
            let randomBird = Math.floor(Math.random() * 6);
            let nextCategory = state.birdCategory + 1;
            if (state.birds.length  < nextCategory + 1) {
                return {
                    ...initialState,
                    score: state.score,
                    gameOver: true

                }}

            return {
                ...initialState,
                birdCategory: nextCategory,
                score: state.score,
                secretBird: birdsData[nextCategory][randomBird],
                birdGroup: birdsData[nextCategory],
                randomBird: randomBird


            };

        case SET_NEXT_GAME:
            return {
                ...initialState
            };

        default: return state
    }
}

export default birdsReducer
