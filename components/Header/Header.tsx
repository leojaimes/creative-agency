import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";
import { CustomDrawer } from "components";
import { styles } from "./styles";
import { theme } from 'theme';

const logoDesktop = '/assets/img/logo_desk.svg'
const logoMobile = '/assets/img/logo_desk.svg'
const burgerMenu = '/assets/img/logo_desk.svg'


export const Header = () => {

    const [open, setOpen] = useState(true)
    const onClose = () => {
        setOpen(false)
    }


    return (
        <AppBar sx={styles.appBar(theme)} position="static">
            <Container sx={styles.container(theme)} maxWidth="xl" >
                <CustomDrawer onClose={onClose} open={open}></CustomDrawer>
                <Toolbar sx={styles.toolbar(theme)} disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Typography>

                    <CustomDrawer open={open} onClose={onClose} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}