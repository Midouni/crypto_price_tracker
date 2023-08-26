import React from "react";
import style from "./carousel.module.css";
import CarouselItem from "../CarsoulItem/CarouselItem";
import { useSelector } from "react-redux";

interface Props {
  data: { iconUrl: string; name: string; uuid: string }[];
  setSelectedCoins: any;
}

function Carousel({ data, setSelectedCoins }: Props) {
  const loading = useSelector((state: any) => state.coins.loading);
  return (
    <div className={`${style.container}`}>
      <div className={`${style.content}`}>
        {!data.length ? (
          <div className={`${style.not_found}`}>
            <span>{`${
              loading ? "" : "There are no coins with this name"
            }`}</span>
          </div>
        ) : (
          data.map((item, index) => {
            const { iconUrl, name, uuid } = item;
            return (
              <CarouselItem
                key={index}
                image={iconUrl}
                name={name}
                uuid={uuid}
                setSelectedCoins={setSelectedCoins}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default React.memo(Carousel);
