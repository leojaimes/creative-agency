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
        // fontFamily:
        //     [
        //         themePalete.FONT_GLOBAL,
        //         "AvenirLTStd-Book",
        //         "AvenirLTStd-Black",
        //         "AvenirLTStd-Medium",
        //         "CooperHewitt-Medium",
        //         "BebasNeue-Regular",
        //         "Segoe-UI-Bold",
        //         "Segoe-UI",
        //     ].join(','),

        h2: {
            fontFamily: 'Montserrat, sans-serif',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#000000',
            [breakPoints.up('md')]: {

            }
        },

        h3: {
            fontSize: '20px',
            fontFamily: 'AvenirLTStd-Book',
            lineHeight: 'normal',
            color: 'white',
            [breakPoints.up('md')]: {
                fontSize: '24px',
            }
        },
    }




})