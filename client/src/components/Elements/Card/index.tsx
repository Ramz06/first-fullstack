import clsx from "clsx";
import type React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  withPadding = true,
}) => {
  const cardClassName = clsx("card bg-base-100 shadow-xl");
  return (
    <div className={cardClassName}>
      {withPadding ? <div className="card-body">{children}</div> : children}
    </div>
  );
};

export default Card
