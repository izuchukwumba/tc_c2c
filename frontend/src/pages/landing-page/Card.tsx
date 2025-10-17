import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Card: React.FC<{
  title: string;
  image: string;
  description: string;
  buttonText: string;
}> = ({ title, image, description, buttonText }) => {
  const navigate = useNavigate();
  return (
    <div className="text-black flex flex-col gap-y-3">
      <div className="text-tcCrimson font-black text-2xl uppercase">
        {title}
      </div>
      <img
        src={image}
        alt={title}
        className="border-l-10 border-tcCrimson max-w-full h-auto"
      />
      <div className="">{description}</div>
      <div className="w-full flex flex-col items-center justify-center pt-2">
        <Button
          text={buttonText}
          moreCSS="bg-tcBlue text-black w-[70%] justify-center border-1 border-black font-semibold"
          handleAction={() => {
            navigate("/auth-intro");
          }}
        />
      </div>
    </div>
  );
};

export default Card;
