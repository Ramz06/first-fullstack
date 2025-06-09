import type React from "react";
import type { ReactNode } from "react";

type CardBodyProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const CardBody: React.FC<CardBodyProps> = ({ children, ariaLabel }) => {
  return (
    <section className="card-body" aria-label={ariaLabel}>
      {children}
    </section>
  );
};

export default CardBody;
