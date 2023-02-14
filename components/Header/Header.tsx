import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";
import { CustomDrawer, Navbar } from "components";
import { styles } from "./styles";
import { theme } from 'theme';


const logoDesk = '/assets/img/logo_desk.svg'
const logoMob = '/assets/img/logo_desk.svg'
const burgerMenu = '/assets/img/logo_desk.svg'


export const Header = () => {

    const [open, setOpen] = useState(true)
    const onClose = () => {
        setOpen(false)
    }
    const onOpen = () => {
        setOpen(true)
    }



    return (
        <AppBar sx={styles.appBar(theme)} position="static">
            <Container sx={styles.container(theme)} maxWidth="xl" >
                <CustomDrawer onClose={onClose} open={open}></CustomDrawer>
                <Toolbar sx={styles.toolbar(theme)} disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography sx={styles.logoDesk(theme)} component="a" href="/">
                        <img src={logoDesk} alt="logo"></img>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }} >
                        <IconButton size="large" aria-label="menu" onClick={onOpen}>
                            <img src={burgerMenu} alt="burgerMenu"></img>
                        </IconButton>
                    </Box>
                    <Typography sx={styles.logoMob(theme)} component="a" href="/">
                        <img src={logoMob} alt="logo"></img>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                        <Navbar></Navbar>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}