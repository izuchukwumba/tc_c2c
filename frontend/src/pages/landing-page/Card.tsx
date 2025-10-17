import React from "react";
import Button from "../../components/Button";

const Card: React.FC<{
  title: string;
  image: string;
  description: string;
  buttonText: string;
}> = ({ title, image, description, buttonText }) => {
  console.log(image);
  return (
    <div className="text-black flex flex-col gap-y-3">
      <div className="text-tcCrimson font-black text-2xl uppercase">
        {title}
      </div>
      <img
        src={image}
        alt={title}
        className="border-l-8 border-tcBlue max-w-full h-auto"
      />
      <div className="">{description}</div>
      <div className="flex flex-col items-center justify-center pt-2">
        <Button
          text={buttonText}
          moreCSS="bg-tcCrimson text-white px-20"
          handleAction={() => {
            console.log(`Button '${buttonText}' clicked`);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
