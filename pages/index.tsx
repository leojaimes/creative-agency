import { Box } from '@mui/material';
import { CustomDrawer } from 'components';
import { useState } from 'react';




export default function Home() {

  const [open, setOpen] = useState(true)
  const onClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <CustomDrawer open={open} onClose={onClose} />

    </Box>
  );
}
