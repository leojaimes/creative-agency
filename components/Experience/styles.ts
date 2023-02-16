import { SxProps, Theme } from '@mui/material';
import { theme } from 'theme';
import { fontsTemplate } from '../../theme/agency-theme';


const experience: SxProps<Theme> | undefined = {
    padding: '44px 20px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    background: '#F5F5F5',
    [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
        padding: '88px 20px',
    },
}

const wrapper: SxProps<Theme> | undefined = {
    maxWidth: '1240px',
    [theme.breakpoints.up('md')]: {

    }
}

const links: SxProps<Theme> | undefined = {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '240px',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        gap: '40px',
        maxWidth: '100%',
    },
}

const link: SxProps<Theme> | undefined = {

    [theme.breakpoints.up('md')]: {

    }
}
const imgItem: SxProps<Theme> | undefined = {
    width: '100%',
    marginTop: '24px',
    maxWidth: '402px',
    [theme.breakpoints.up('sm')]: {
        marginTop: '44px',
    },

}
const contentTitle: SxProps<Theme> | undefined = {
    fontSize: '14px',
    lineHeight: '17px',
    marginTop: '12px',
    maxWidth: '402px',
    textAlign: 'left',
    margin: '12px auto 0',
    fontFamily: fontsTemplate.Montserrat,
    textTransform: 'capitalize',
    [theme.breakpoints.up('md')]: {

    }
}

export const styles = {
    experience,
    wrapper,
    links,
    link,
    imgItem,
    contentTitle

}

