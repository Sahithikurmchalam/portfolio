import {useEffect} from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/95297-computer.json'
const RightHomeComponent = () => {

  return (
    <div className='min-h-screen flex items-center justify-center lg:mx-48'>
        <Lottie width="500px" animationData={animationData}/>
    </div>
  )
};

export default RightHomeComponent;
