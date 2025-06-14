import type React from "react";
import type { ReactNode } from "react";
import cameraLogo from '../../../assets/image/camera.png'

type CardProps = {
  children?: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={cameraLogo} alt="camera" className="w-full"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>card</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
