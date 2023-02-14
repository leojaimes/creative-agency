import { SxProps, Theme } from "@mui/system"
import { colorsTemplate } from 'theme'

export const styles = {
    btn: (theme: Theme): SxProps<Theme> | undefined => ({
        "display": "flex",
        fontFamily: 'Montserrat, sans-serif',

        "padding": "20px 60px",
        "width": "197px",
        "height": "64px",
        "background": colorsTemplate.slateBlue,
        "borderRadius": "8px",
        "fontStyle": "normal", "fontWeight": "700", "fontSize": "16px", "lineHeight": "20px", "textAlign": "center", "textTransform": "capitalize", "color": "#FFFFFF",
        '&:hover': {
            backgroundColor: colorsTemplate.slateBlue2
        }
    })
}