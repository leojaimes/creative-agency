import { Theme, SxProps } from '@mui/system';
import { colorsTemplate, theme } from 'theme';


export const styles = {
    appBar: (): SxProps<Theme> | undefined => ({
        backgroundColor: 'white',
        boxShadow: 'none',
        [theme.breakpoints.up('md')]: {
            borderBottom: `0.5px solid ${colorsTemplate.slateBlue}`,
            padding: '20px 0',
            margin: 'auto',
            maxWidth: '1240px',
        }
    }),

    container: (): SxProps<Theme> | undefined => ({

        [theme.breakpoints.up('lg')]: {
            padding: '0',
            margin: '0',

        }
    }),


    toolbar: (): SxProps<Theme> | undefined => ({

        [theme.breakpoints.up('md')]: {

        }
    }),

    logoDesk: (): SxProps<Theme> | undefined => ({
        mr: 2,
        display: { xs: 'none', lg: 'flex' },
        flexGrow: 1,


    }),
    logoMob: (): SxProps<Theme> | undefined => ({
        mr: 2,
        display: { xs: 'flex', lg: 'none' },
        flexGrow: 1,

    })

}