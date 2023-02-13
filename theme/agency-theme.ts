import { createTheme } from '@mui/material/styles'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'


export enum template {
    slateBlue = "#777FEB",

}



const breakPoints = createBreakpoints({

})

export const theme = createTheme({
    palette: {
        primary: {
            main: '#686868',

        },
        secondary: {
            main: '#777FEB',
        },

    },
    typography: {
        h2: {
            fontFamily: 'Montserrat, sans-serif',
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