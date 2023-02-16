import { SxProps, Theme } from "@mui/system"
import { colorsTemplate } from 'theme'


export const styles = {
    btn: (theme: Theme): SxProps<Theme> | undefined => ({
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '20px',
        textTransform: 'capitalize',
        color: '#FFFFFF',
        padding: '20px 60px',
        background: colorsTemplate.slateBlue,
        borderRadius: '8px',
        '&:hover': {
            background: '#646ab0',
        },
    })
}