import React from 'react'
import {categories} from '../utils/constance'
import {Stack} from '@mui/material'
const Sidebar = ({ selectedCategory, setSelectedCategory}) => {
  
  return (
    <Stack
    direction='row'
    sx={{
    flexDirection:{sx:'row',md:'column'},
    overflowY:'auto',
    height:{sx:'auto',md:"95vh"}
    }}>
      {categories.map((category)=>(
       <button
       onClick={()=>setSelectedCategory(category.name)}
       style={{background:category.name===selectedCategory && "rgb(73 105 31)",color:'white'}}
       className='sidebar-btn'
        key={category.name}>
           <span style={{
             color:category.name===selectedCategory ? 'white':'rgb(73 105 31)',
             marginRight:'10px'}}>{category.icon}</span>
           <span style={{
             opacity:category.name===selectedCategory ? "1" : ".8",
             color:category.name===selectedCategory ? 'white' : "rgb(73 105 31)"
           }}>{category.name}</span>
           
       </button>
      ))}
   </Stack>
  )
}

export default Sidebar



