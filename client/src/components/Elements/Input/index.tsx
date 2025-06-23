import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input id={id} className="input input-bordered" {...rest} />
    </div>
  );
};

export default Input;
