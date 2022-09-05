import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Video({ video: { id, snippet } }) {
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <Card elevation={0}>
      <CardActionArea
        sx={{
          "&.MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },
        }}
        onClick={() => console.log("ActionArea clicked")}
      >
        <CardMedia component="img" image={thumbnails.medium.url} />
        <CardContent>
          {/* Video / Playlist Title */}
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {id.playlistId && "Playlist: "}
            {title}
          </Typography>
          {/* Channel Title */}
          <Typography
            sx={{
              "&.MuiTypography-root:hover": {
                color: "white",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              console.log("Channel clicked");
            }}
            variant="caption"
            color="grey.500"
          >
            {channelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
