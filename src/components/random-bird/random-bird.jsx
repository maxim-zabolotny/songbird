import React from 'react'
import './style.css'
import bird from '../../img/bird.06a46938.jpg'
import audio from '../../audio/start.mp3'

const RandomBird = () => {
    return (
        <div className={'question-panel'}>
            <img src={bird} className={'bird-image'}/>
            <div className={''}>
                <ul className={'question-panel-aside'}>
                    <li className={'question-panel-item'}>
                        <h3>******</h3>
                    </li>
                    <li className={'question-panel-item'}>
                        <div className={'audio-player'} id={'audio-player'}>
                            <audio id={'audio'} src={audio}/>
                            <div className="controls">
                                <div id={'playback-button'} className={'playback-button paused'}>
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

export default RandomBird
