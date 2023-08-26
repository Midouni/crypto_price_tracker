import { useState } from "react";
import CarouselItem from "components/CryptoListItem/CryptoListItem";
import style from "./cryptoList.module.css";

type data = {
  name: string;
  iconUrl: string;
  price: number;
  uuid: string;
};
interface Props {
  listTitle: string;
  data: data[];
  setSelectedCoins?: any;
}

function CryptoList({ listTitle, data, setSelectedCoins = null }: Props) {
  const [limit, setLimit] = useState(5);
  const handleShowMore = () => {
    const newLimit = Math.min(data.length, limit + 5);
    setLimit(newLimit);
  };
  const handleShowLess = () => {
    const newLimit = Math.max(5, limit - 5);
    setLimit(newLimit);
  };

  if (!data.length) {
    return <></>;
  }
  return (
    <div className={`${style.content}`}>
      <div className={`${style.list_title}`}>
        <h3>{listTitle}</h3>
      </div>
      <div className={`${style.list_header}`}>
        <span>icon :</span>
        <span>name :</span>
        <span>price $:</span>
      </div>
      {data.map((item, index) => {
        if (index >= limit) {
          return null;
        }
        return (
          <CarouselItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.iconUrl}
            uuid={item.uuid}
            setSelectedCoins={setSelectedCoins}
          />
        );
      })}
      <div className={`${style.show_more}`}>
        <span onClick={handleShowMore}>show more</span>
        <span onClick={handleShowLess}>show less</span>
      </div>
    </div>
  );
}

export default CryptoList;
