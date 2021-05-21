import React from 'react';
import medBannerImage from '../../assets/slider-01.jpg';

export default function MainPage(props) {
    return (
        <div>
            <div>Hellow There..</div>
            <div>Here are some images listed below</div>
            <img src={medBannerImage} />
        </div>
    ); 
} 