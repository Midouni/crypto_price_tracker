import React from "react";
import style from "./CarsoulItem.module.css";

type Props = {
  image: string;
  name: string;
  uuid: string;
  setSelectedCoins: any;
};

function CarouselItem({ uuid, image, name, setSelectedCoins }: Props) {
  const handleClick = (e: any) => {
    setSelectedCoins((previousState: any) => new Set([...previousState, uuid]));
  };
  return (
    <div onClick={handleClick}>
      <div className={`${style.content}`}>
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
    </div>
  );
}

export default CarouselItem;
