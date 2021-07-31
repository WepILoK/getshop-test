import React, {useEffect, useState} from 'react';

import './App.scss';
import {Banner} from "./components/Banner/Banner";
import {Keyboard} from "./components/Keyboard/Keyboard";
import {Promo} from "./pages/Promo/Promo";
import video from './assets/videos/fonVideo.mp4'
import poster from './assets/images/background.png'

export function App() {
    const [bannerClick, setBannerClick] = useState(false)

    const changePage = () => {
        setBannerClick(!bannerClick)
    }

    return (
        <div className="app">
            <div className='content'>
                <video
                    className='content__video'
                    poster={poster}
                    muted autoPlay loop preload='auto'>
                    <source src={video} type='video/mp4'/>
                </video>
                {bannerClick
                ? <Promo changePage={changePage}/>
                : <Banner changePage={changePage}/>}
            </div>
        </div>
    );
}
