import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search'
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='search.....'
      />

      <IconButton sx={{ p: '10px', color: 'red' }} type='submit' sx={{ color: 'green' }}>
        <BsSearch />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
