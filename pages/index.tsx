import { Box } from '@mui/material';
import { Header, Hero, CustomCard, CreativeDesign } from 'components';
import { useState } from 'react';
import { CardModel } from 'components';

const strategyIcon = '/assets/img/strategy.svg'
const productIcon = '/assets/img/product-design.svg'
const developmentIcon = '/assets/img/strategy.svg'

export default function Home() {

  const cards: CardModel[] = [
    {
      title: 'strategy',
      icon: strategyIcon,
      listItems: [
        "product manegment",
        "mpv definition",
        "product strategy",
      ],
    },
    {
      title: 'product design',
      icon: productIcon,
      listItems: [
        "product manegment",
        "mpv definition",
        "product strategy",
      ],
    },
    {
      title: 'development',
      icon: developmentIcon,
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
