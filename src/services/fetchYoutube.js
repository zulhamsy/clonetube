import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const config = {
  params: {
    maxResults: "10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchCategoryVideos(
  url,
  params = { part: "snippet,id", regionCode: "ID", order: "date" },
) {
  const { data } = await axios.get(`${BASE_URL}/search?${url}`, {
    ...config,
    params: {
      ...config.params,
      ...params,
    },
  });
  return data;
}
