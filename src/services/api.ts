import axios from "axios";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins", // i didnt use .env file for make setup easy for you
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "500",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "3612688faemsh2066d50704f2fa4p1c2b2ejsnda469f165644", // i didnt use .env file for make setup easy for you
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com", // i didnt use .env file for make setup easy for you
  },
};

export const getAllCoinsApi = async () => {
  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
