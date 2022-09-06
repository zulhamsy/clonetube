import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Videos } from ".";
import {
  fetchChannelDetails,
  fetchChannelVideos,
} from "../services/fetchYoutube";

export default function ChannelDetail() {
  const [channelInfo, setChannelInfo] = useState({});
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchChannelDetails(id).then((result) => setChannelInfo(result));
    fetchChannelVideos(id).then((result) => setChannelVideos(result));
  }, [id]);

  const localNumber = parseInt(channelInfo?.statistics?.subscriberCount);
  return (
    <>
      {/* Banner */}
      <Box
        sx={{
          backgroundImage:
            "url(" +
            channelInfo?.brandingSettings?.image?.bannerExternalUrl +
            ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        minHeight="200px"
      />
      <Stack direction="column" alignItems="flex-start">
        {/* Channel Info */}
        <Stack direction="row" alignItems="center" gap={3} py={2} px={8}>
          <Avatar
            src={channelInfo?.snippet?.thumbnails?.medium?.url}
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <div>
            <Typography variant="h5" color="white" mb={0.5}>
              {channelInfo?.snippet?.title}
            </Typography>
            <Typography variant="body2" color="grey.500">
              {localNumber.toLocaleString()} subscribers
            </Typography>
          </div>
        </Stack>
        {/* Channel's Videos */}
        <Box px={8} pt={2}>
          <Typography variant="h6" gutterBottom color="grey.500">
            Upload
          </Typography>
          <Videos videos={channelVideos} />
        </Box>
      </Stack>
    </>
  );
}
