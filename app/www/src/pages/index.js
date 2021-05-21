import React from 'react';
import medBannerImage from '../../assets/medBannerImg.png';

export default function MainPage(props) {
    return (
        <div>
            <div>Hellow There..</div>
            <div>Here are some images listed below</div>
            <img src={medBannerImage} />
        </div>
    ); 
} 