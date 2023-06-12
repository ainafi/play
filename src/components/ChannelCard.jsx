import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box>
      <Link to={`/channel/${channelDetail?.id?.ChannelId}`}>
        <Card sx={{ width: 300 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
            <CardMedia sx={{ width: 300, height: 300 }} image={channelDetail?.snippet?.thumbnails?.medium?.url} />
            <Typography variant='h5' fontWeight='bold'>
              {channelDetail?.snippet?.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default ChannelCard;
