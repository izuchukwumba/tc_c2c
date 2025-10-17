import React from "react";

const Button: React.FC<{
  text: string;
  moreCSS: string;
  handleAction: () => void;
}> = ({ text, moreCSS, handleAction }) => {
  return (
    <div
      onClick={handleAction}
      className={`text-black flex text-center cursor-pointer hover:opacity-80 ${
        moreCSS ?? ""
      }`}
    >
      <div className="pl-3 pr-4 py-3 uppercase font-primary text-lg ">
        {text}
      </div>
    </div>
  );
};
export default Button;
