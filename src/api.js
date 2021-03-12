import axios from "axios";

const API_KEY = "2f68aa38c4714b228178841541b9c5ef";
const URL = "https://api.opencagedata.com/geocode/v1/json?";

export const fechtCity = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: `${query}`,
      key: API_KEY,
      countrycode : "fr"
    },
  });
  return data;
};
