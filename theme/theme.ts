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
            fontSize: '24px',
            fontFamily: 'Segoe-UI',
            lineHeight: 'normal',
            color: 'black',
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