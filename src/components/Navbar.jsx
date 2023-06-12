import React from 'react';
import {Stack} from "@mui/material"
import {Link} from "react-router-dom"
import Logo from "../assets/image/logo.png"
import SearchBar from './searchBar';
const Navbar = () => {
    return (
        <Stack
         direction='row'
         alignItems="center"
         p={2}
         position='sticky'
         sx={{
            position:'sticky',
            top:0,
            background:'#fff',
            justifyContent:"space-between"
         }}
        >
            <Link to="/" style={{display:'flex',alignItems:'center'}}  >
                <img width={50} src={Logo} alt="logo" />
            </Link>
            
            <SearchBar/>

        </Stack>
    );
};

export default Navbar;