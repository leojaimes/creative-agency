import { createTheme } from '@mui/material/styles'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'


export enum colorsTemplate {
    grey = '#686868',
    slateBlue = "#777FEB",

}

export enum fontsTemplate {
    Montserrat = 'Montserrat, sans-serif'
}



const breakPoints = createBreakpoints({

})

export const theme = createTheme({
    palette: {
        primary: {
            main: colorsTemplate.grey,

        },
        secondary: {
            main: colorsTemplate.slateBlue,
        },

    },
    typography: {

        h2: {
            fontFamily: fontsTemplate.Montserrat,
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#000000',
            [breakPoints.up('md')]: {

                fontSize: '64px',
                lineHeight: '78px',
            }
        },

        body1: {
            fontFamily: 'Montserrat, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#686868',
            [breakPoints.up('md')]: {
                fontSize: '24px',
                lineHeight: '29px',
                fontWeight: '500',
            }
        },



    }




})