import React, {useEffect, useState} from 'react'
import './style.css'
import bird from '../../img/bird.06a46938.jpg'
import {connect} from "react-redux";



const RandomBird = ({selectedBird, guessed, secretBird}) => {

    const [play, setPlay] = useState(true)


    let audio = React.createRef()
    console.log(audio);
    useEffect(() => {
        play ? audio.current.play() : audio.current.pause()
    },[play])

    return (
        <div className={'question-panel'} >
            <img src={guessed ? selectedBird.image : bird} className={'bird-image'}/>
            <div className={''}>
                <ul className={'question-panel-aside'}>
                    <li className={'question-panel-item'}>
                        <h3>{guessed ? selectedBird.name : '******'}</h3>
                    </li>
                    <li className={'question-panel-item'}>
                        <div
                            className={'audio-player'}
                            id={'audio-player'}
                        >
                            <audio src={secretBird.audio} id={'audio'} ref={audio} autoPlay/>
                            <div className="controls">
                                <div id={'playback-button'} className={'playback-button paused'} onClick={() => setPlay(!play)}>
                                <div></div>
                                </div>
                                <div className={'timebar'} id={'timebar'}>
                                    <div className={'timebar-bar'} id={'timebar-bar'}>
                                    </div>
                                    <div className={"timebar-circle"} id={"timebar-circle"}></div>
                                    <div className="timebar-time-info">
                                        <div>1</div>
                                        <div>3</div>
                                    </div>
                                </div>

                                <div id={'volume_control'}>
                                    <label id={'rngVolume_label'}>
                                        <input
                                            type={'range'}
                                            id={'rngVolume'}
                                            min={'0'}
                                            max={'1'}
                                            step={'0.01'}
                                            defaultValue={'0.5'}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    gameOver: state.gameOver,
    selectedBird: state.selectedBird,
    guessed: state.guessed,
    secretBird: state.secretBird
})

export default connect(mapStateToProps, null)(RandomBird)
