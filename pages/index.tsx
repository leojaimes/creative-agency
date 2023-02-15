import { Box } from '@mui/material';
import { Header, Hero, CustomCard, CreativeDesign } from 'components';
import { useState } from 'react';
import { CardModel } from '../components/CreativeDesign/CreativeDesign';




export default function Home() {

  const cards: CardModel[] = [
    {
      title: 'strategy',
      icon: '',
      listItems: [
        "product manegment",
        "mpv definition",
        "product strategy",
      ],
    },
    {
      title: 'product design',
      icon: '',
      listItems: [
        "product manegment",
        "mpv definition",
        "product strategy",
      ],
    },
    {
      title: 'development',
      icon: '',
      listItems: [
        "product manegment",
        "mpv definition",
        "product strategy",
      ],
    },
  ]

  return (
    <Box>
      {/**
    <Header />
      <Hero /> 
       */}
      <CreativeDesign cards={cards} />
    </Box>
  );
}
