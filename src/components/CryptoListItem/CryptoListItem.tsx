import React from "react";
import style from "./cryptoListItem.module.css";

interface Props {
  name: string;
  price: number;
  image: string;
  uuid: string;
  setSelectedCoins: any;
}
function CryptoListItem({ uuid, name, price, image, setSelectedCoins }: Props) {
  const handleCick = () => {
    setSelectedCoins((prev: any) => {
      const updatedSet = new Set(prev);
      updatedSet.delete(uuid);
      return updatedSet;
    });
  };
  return (
    <div
      className={`${style.content}`}
      style={{ pointerEvents: `${setSelectedCoins == null ? "none" : "auto"}` }}
      onClick={handleCick}
    >
      <span>
        <img src={image} alt="" />
      </span>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}

export default CryptoListItem;
