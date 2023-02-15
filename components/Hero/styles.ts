import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { theme } from 'theme'

const hero: SxProps<Theme> | undefined = {
    padding: '22px',
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'center',
        padding: '44px 20px 20px',
    }
}

const wrapper: SxProps<Theme> | undefined = {
    padding: '20px',
    [theme.breakpoints.up('md')]: {
        maxWidth: '1240px',
        display: 'flex',
        alignItems: 'center',
        padding: '44px 20px 20px',
        gap: '35px',
    }
}

const photo: SxProps<Theme> | undefined = {
    width: '100%',
    maxWidth: '509px',
    display: ' block',
    margin: '44px auto 0',
    [theme.breakpoints.up('md')]: {

    }
}

const text: SxProps<Theme> | undefined = {
    margin: '25px 0',
    [theme.breakpoints.up('md')]: {
        marginBottom: '44px',
    }
}




export const styles = {
    hero,
    wrapper,
    photo,
    text
}