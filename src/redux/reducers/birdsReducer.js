import birdsData from "../../birds";

const randomBird = Math.floor(Math.random()*6)

const initialState = {
    birds: [...birdsData],
    birdCategory: 0,
    score: 0,
    secretBird: birdsData[0][randomBird],
    selectedBird: birdsData[0][0],
    attemptCount: 0,
    guessed: false,
    gameOver: false,
    birdGroup: birdsData[0],
}

const birdsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default birdsReducer
