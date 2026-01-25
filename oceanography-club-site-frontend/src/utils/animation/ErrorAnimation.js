import Lottie from 'lottie-react';
import animationData from '../../assets/fetching-data-error-animation.json';

const ErrorAnimation = () => {
  return (
    <div
      style={{
        width: "20%",
        overflow: "hidden"
      }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

export default ErrorAnimation;