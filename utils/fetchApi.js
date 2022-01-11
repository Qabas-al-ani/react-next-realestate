import axios from "axios";

const baseUrl = "http://bayut.p.rapidapi.com";

export const fetchApi = async url => {
  const response = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ea21ba50bfmsh6bfa3dbbce964e2p1b2b5bjsned8d446dff99",
    },
  });
};
