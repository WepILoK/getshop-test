import React, {useState} from 'react';

import {Banner} from "./pages/Banner/Banner";
import {Promo} from "./pages/Promo/Promo";
import video from './assets/videos/fonVideo.mp4'
import poster from './assets/images/background.png'

import './App.scss';


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
