import { Box } from '@mui/material';
import { Header, Hero, CustomCard } from 'components';
import { useState } from 'react';




export default function Home() {


  const strategySvg = '/assets/img/strategy.svg'
  const listItems = [
    "product manegment",
    "mpv definition",
    "product strategy"
  ]
  return (
    <Box>
      {/**
    <Header />
      <Hero /> 
       */}
      <CustomCard title={'Strategy'} icon={strategySvg} listItems={listItems}></CustomCard>
    </Box>
  );
}
