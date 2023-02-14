import { Button, Stack, Typography, Box } from '@mui/material';
import { CustomButton } from 'components';
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <Box>
      <Button variant="contained" color="secondary" >Button</Button>
      <Typography variant="body1" color="initial">Choose out of 2500+ mentors. Trusted by 250k users.
        Industry experts and top university professors Runs in a browser. Can be downloaded on desktop, tablet and mobiles. Extremely fast loading at 200ms. Updates work directory from the website.</Typography>
      <CustomButton> Join us</CustomButton>
    </Box>
  );
}
