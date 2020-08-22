import React from "react";
import {connect} from "react-redux";

const Options = ({birdGroup}) => {
    return (
        <>
            {birdGroup.map(bird => {
                return (
                    <li className={'answers-list-item'} id={bird.id} key={bird.id}>
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

export default connect(mapStateToProps, null)(Options)
