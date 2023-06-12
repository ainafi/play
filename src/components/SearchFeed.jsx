import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Video } from './';
import { fetchFromAPI } from '../utils/fetchData';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ height: '95vh', overflowY: 'auto', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' p={2}>
        Search for
        <span style={{ color: 'rgb(73 105 31)' }}> {searchTerm} Video</span>
      </Typography>

      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
