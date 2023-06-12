
import React, { useEffect, useState } from 'react';
import { Stack, Typography, Box } from "@mui/material"
import { Video, Sidebar } from './'
import { fetchFromAPI } from '../utils/fetchData';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("new")
  const [videos, setVideos] = useState([]);

 
  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))

    
    }, [selectedCategory]);
    

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" }
      }}
    >
      <Box sx={{
        height: { sx: 'auto', md: '94vh' },
        borderRight: '1px solid #000 ',
        px: 1
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' mt={1}>
          Copyright 2023 Aina Finaritra
        </Typography>
      </Box>
      <Box p={2} sx={{ height: '95vh', overflowY: 'auto', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' p={2}>
          {selectedCategory}
          <span style={{ color: 'rgb(73 105 31)' }}>Video</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
