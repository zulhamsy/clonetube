import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const config = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchCategoryVideos(
  query,
  params = { part: "snippet,id", regionCode: "ID" },
) {
  const { data } = await axios.get(`${BASE_URL}/search?q=${query}`, {
    ...config,
    params: {
      ...config.params,
      ...params,
    },
  });
  return data;
}

export async function fetchChannelDetails(channelId) {
  const {
    data: { items },
  } = await axios.get(`${BASE_URL}/channels`, {
    ...config,
    params: {
      ...config.params,
      part: "snippet,id",
      id: channelId,
    },
  });
  return items[0];
}
