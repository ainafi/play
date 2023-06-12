import { Box } from '@mui/material';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchData';

const ChannelDetail = () => {
   const { id }=useParams();
    
    return (
        <>
            <div>{id}</div>
        </>
    );
};

export default ChannelDetail;