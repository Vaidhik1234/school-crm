
import { Player } from '@lottiefiles/react-lottie-player';

const AuthAnimation = () => {
    return (
        <div style={{ width: '600px', height: '600px' }}>
            <Player
                autoplay
                loop
                src="https://lottie.host/169f27fe-ad66-4a8a-b552-665b51245900/ROuRR2rW9B.json"
                style={{ height: '100%', width: '100%' }}
            >
            </Player>
        </div>
    );
};


export default AuthAnimation;