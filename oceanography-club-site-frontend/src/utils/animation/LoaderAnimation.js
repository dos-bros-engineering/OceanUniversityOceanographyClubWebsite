import Lottie from 'lottie-react';
import animationData from '../../assets/loader-animation.json';

const LoaderAnimation = () => {
  return (
    <div
      style={{
        width: "12%",
        overflow: "hidden",
      }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

export default LoaderAnimation;
