import {  SxProps,  Theme } from '@mui/system'

export const styles = { 

    btn : ( theme: Theme, txtColor?: string  ,bgColor?: string ) :  SxProps<Theme> | undefined =>({
        border: '0',
        color:  txtColor ? txtColor : 'white',
        fontSize: '16px',
        fontWeight:  'bold',
        width: '200px',
        letterSpacing: '-0.1px',
        lineHeight: '24px',
        height: '48px',
        padding: '5px 10px',
        margin: '5px',
        textAlign: 'center',
        maxWidth: '320px',
        backgroundColor: bgColor ? bgColor : '#0055D2',
        boxShadow: 'iniset 0 0 0 1px #0055D2',
        textTransform: 'none',
        [theme.breakpoints.up('md')]: {

        }
    })



}