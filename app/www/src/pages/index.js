import React from 'react';
import medBannerImage from '../../assets/relax.jp2';

export default function MainPage(props) {
    return (
        <div>
            <div>Hellow There..</div>
            <div>Here are some images listed below</div>
            <img src={medBannerImage} />
        </div>
    ); 
} 