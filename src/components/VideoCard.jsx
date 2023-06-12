import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Link to={videoId ? `video/${videoId}` : ''}>
        <CardMedia sx={{ width: 300, height: 240 }} image={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
        <CardContent>
          <Typography variant='h5' fontWeight='bold'>
            {snippet?.title.slice(0, 30)}
          </Typography>
          <Typography variant='h6'>
            {snippet?.description.slice(0, 50)}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
