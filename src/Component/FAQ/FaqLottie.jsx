import React from 'react';

import anim from '../../../public/faq.json'
import Lottie from 'lottie-react';


const FaqLottie = () => {
    const style = {
        height: 300,
    };
    return (
        <div>
      <Lottie animationData={anim} style={style} />
        </div>
    );
};

export default FaqLottie;