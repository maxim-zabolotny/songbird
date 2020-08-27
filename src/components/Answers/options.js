import React from "react";
import {connect} from "react-redux";
import {setCorrectAnswerAC, setIncorrectAnswerAC, setSelectedBirdAC} from "../../redux/actions/actions";
import sound from "../sound";
import ok from '../../audio/ok.wav'
import error from '../../audio/error.wav'


const Options = ({ birdGroup, setSelectedBird, secretBird, setCorrectAnswer, setIncorrectAnswer }) => {

    const selectBird = (e, birdName) => {
        setSelectedBird(e.target.id)
        if (secretBird.name === birdName) {
            e.target.classList.add('green')
            sound(ok)
            setCorrectAnswer()
        }
        else {
            e.target.classList.add('red')
            setIncorrectAnswer(birdName)
            sound(error)
        }
    }
    return (
        <>
            {birdGroup.map(bird => {
                return (
                    <li
                        className={'answers-list-item'}
                        id={bird.id}
                        key={bird.name}
                        onClick={(e) => selectBird(e, bird.name)}
                    >

                        <span className={'li-btn'}></span>
                        {bird.name}
                    </li>
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => ({
    birdGroup: state.birdGroup,
    secretBird: state.secretBird,
    selectedBird: state.selectedBird
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedBird: (id) => dispatch(setSelectedBirdAC(id)),
    setCorrectAnswer: () => dispatch(setCorrectAnswerAC()),
    setIncorrectAnswer: (birdName) => dispatch(setIncorrectAnswerAC(birdName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)
