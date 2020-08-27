import {
    SET_CORRECT_ANSWER,
    SET_INCORRECT_ANSWER,
    SET_NEXT_GAME,
    SET_NEXT_LEVEL,
    SET_SELECTED_BIRD
} from "./actions-types";

export const setSelectedBirdAC = (id) => ({type:SET_SELECTED_BIRD, id})
export const setCorrectAnswerAC = () => ({type: SET_CORRECT_ANSWER})
export const setIncorrectAnswerAC = (birdName) => ({type: SET_INCORRECT_ANSWER, birdName})
export const setNextLevelAC = () => ({type: SET_NEXT_LEVEL})
export const setNextGameAC = () => ({type: SET_NEXT_GAME})


