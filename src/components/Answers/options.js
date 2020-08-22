import React, {useState} from "react";
import {connect} from "react-redux";
import {setSelectedBirdAC} from "../../redux/actions/actions";

const Options = ({ birdGroup, setSelectedBird }) => {

    const selectBird = (e) => {
        setSelectedBird(e.target.id)
    }
    return (
        <>
            {birdGroup.map(bird => {
                return (
                    <li
                        className={'answers-list-item'}
                        id={bird.id}
                        key={bird.id}
                        onClick={selectBird}
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
    birdGroup: state.birdGroup
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedBird: (id) => {
            dispatch(setSelectedBirdAC(id))
        },
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)
