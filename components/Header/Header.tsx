import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";
import { CustomDrawer } from "components";
export const Header = () => {

    const [open, setOpen] = useState(true)
    const onClose = () => {
        setOpen(false)
    }


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                    </Typography>

                    <CustomDrawer open={open} onClose={onClose} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}