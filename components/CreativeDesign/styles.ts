import { SxProps, Theme } from "@mui/material"
import { theme } from 'theme'

const creativeDesign: SxProps<Theme> | undefined = {
    padding: '60px 20px 88px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'center',
        padding: '192px 20px',
    }
}


const wrapper: SxProps<Theme> | undefined = {
    [theme.breakpoints.up('md')]: {
        maxWidth: '1240px',
        alignItems: 'center',
        gap: '35px',
    }
}

const stack: SxProps<Theme> | undefined = {
    marginTop: '44px',
    gap: '44px',
    flexWrap: 'wrap',
    flexDirection: 'initial',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.up('md')]: {
        maxWidth: '1240px',
        alignItems: 'center',
        gap: '15px',
    }
}



export const styles = {
    creativeDesign,
    wrapper,
    stack
}