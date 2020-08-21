import React from 'react'
import './style.css'
import bird from '../../img/bird.06a46938.jpg'
import Options from "./options";

const Answer = () => {
    return (
        <div className={'answers-block'}>
            <div className={'answers-block-variants'}>
                <ul className={'answers-list'}>
                    <Options />
                </ul>
            </div>
            <div className={'description-block'}>
                <div className={'description-block-card'}>
                    {/*<p className={'task-instructions'}>*/}
                    {/*    <span>Послушайте плеер</span>*/}
                    {/*    <span>Выберите птицу из списка.</span>*/}
                    {/*</p>*/}
                    <div className={'card-body'}>
                        <div className="card-body">
                            <img className="bird-image" src={bird}/>
                            <ul className="list-group-card">
                                <li><h4>Ворон</h4></li>
                                <li>Corvus corax</li>
                                <li>
                                    <div className="audio-player" id="audio-player2">
                                        <audio id="audio2"/>

                                        <div className="controls">
                                            <div id="playback-button2" className="playback-button paused">
                                                <div></div>

                                            </div>
                                            <div className="timebar" id="timebar2">
                                                <div className="timebar-bar"
                                                     style={{backgroundImage: 'linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140)' + 32 + ', rgb(115, 115, 115)' + 32 + ', rgb(115, 115, 115) 100%)'}}
                                                     id="timebar-bar2" /*onClick={this.audioChangeTime}*/></div>
                                                <div className="timebar-circle" id="timebar-circle2"
                                                     style={{left: 32}}></div>
                                                <div className="timebar-time-info">
                                                    <div>23</div>
                                                    <div>32</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span className="bird-description">
                            Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.
                        </span>
                </div>
            </div>
            <button className="next-btn">Next level</button>
        </div>
    )
}

export default Answer
