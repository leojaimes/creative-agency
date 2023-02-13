import { createTheme } from '@mui/material/styles'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'


export enum template {
    darkPurple = "#673F86",
    lightPurple = "#9E86BB",
}

export enum themePalete {
    BG = '#E9EBEE', //gray
    ORANGE = '#FF6433',
    BLUE = '#0084FC',
    FONT_GLOBAL = 'Roboto'

}

const breakPoints = createBreakpoints({

})

export const theme = createTheme({
    palette: {

    },
    //ver styles.globals.css y _app.tsx desde alli se llaman las fonts
    typography: {
        h2: {
            fontSize: '24px',
            fontFamily: 'Montserrat',
            lineHeight: 'normal',
            color: 'black',
            [breakPoints.up('md')]: {

            }
        },

        h3: {
            fontSize: '20px',
            fontFamily: 'Montserrat',
            lineHeight: 'normal',
            color: 'white',
            [breakPoints.up('md')]: {
                fontSize: '24px',
            }
        },
    }




})