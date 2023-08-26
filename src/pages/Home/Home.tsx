import { useEffect, useState, useMemo } from "react";
import { SearchBar, Carousel, CryptoList } from "components";
import style from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "redux/actions/coinsActions";
import { searchByName } from "utils/searchByName";

function Home() {
  const dispatch: any = useDispatch();
  // get data from reducer
  const data = useSelector((state: any) => state.coins.allCoins);
  // data for carousel component
  const [filter, setFilter] = useState("");
  let selectedCoinsArray: any = localStorage.getItem("selectedData")
    ? JSON.parse(localStorage.getItem("selectedData")!)
    : [];
  const [selectedCoins, setSelectedCoins] = useState(
    new Set(selectedCoinsArray)
  );

  const carouselData = useMemo(() => {
    return searchByName(data, filter).map((coin: any) => ({
      name: coin.name,
      iconUrl: coin.iconUrl,
      uuid: coin.uuid,
    }));
  }, [filter, data]);

  /* eslint-disable */
  const selectedData = useMemo(() => {
    selectedCoinsArray = Array.from(selectedCoins);
    localStorage.setItem("selectedData", JSON.stringify(selectedCoinsArray));
    const filteredData = data.filter((coin: any) =>
      selectedCoins.has(coin.uuid)
    );
    const sortedData = [...filteredData].sort((a: any, b: any) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    return sortedData;
  }, [selectedCoins, data]);

  useEffect(() => {
    dispatch(getAll());
    setInterval(() => {
      dispatch(getAll());
    }, 60000);
  }, []);
  return (
    <div className={`${style.conatiner}`}>
      <div className="content">
        <SearchBar setFilter={setFilter} />
        <Carousel data={carouselData} setSelectedCoins={setSelectedCoins} />
        <div className={`${style.list_container}`}>
          <CryptoList
            listTitle={"selected data"}
            data={selectedData}
            setSelectedCoins={setSelectedCoins}
          />
          <CryptoList listTitle={"top coins"} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
