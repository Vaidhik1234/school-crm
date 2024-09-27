import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = () => {
    return (
        <div style={{ width: '450px', height: '450px' }}>
            <Player
                autoplay
                loop
                src="https://lottie.host/cd4f81f1-8871-42c9-afc5-725999a2602d/MTFXapt00r.json"
                style={{ height: '100%', width: '100%' }}
                rel="preload"
            >
            </Player>
        </div>
    );
};


export default LottieAnimation;