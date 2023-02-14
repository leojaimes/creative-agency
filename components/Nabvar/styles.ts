import { SxProps, Theme } from "@mui/system"
import { colorsTemplate } from 'theme'

export const styles = {
    btnLink: (theme: Theme): SxProps<Theme> | undefined => ({
        display: 'flex',
        marginRight: '44px',
        "fontFamily": "'Montserrat'",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "18px",
        "lineHeight": "22px",
        "textAlign": "center",
        "textTransform": "capitalize",
        padding: '0 ',
        color: '#000000'
    })
}