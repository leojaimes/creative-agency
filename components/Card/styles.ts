import { SxProps, Theme } from "@mui/material";
import { theme, colorsTemplate } from 'theme';
import { fontsTemplate } from '../../theme/agency-theme';
const card: SxProps<Theme> | undefined = {
    textAlign: 'left',
    boxSizing: "border-box",
    padding: "44px",
    //width: "403px",
    background: "#FFFFFF",
    border: `0.5px solid ${colorsTemplate.slateBlue}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    [theme.breakpoints.up('md')]: {
        maxWidth: "403px",
    }
}

const title: SxProps<Theme> | undefined = {
    [theme.breakpoints.up('md')]: {}
}

const listItem: SxProps<Theme> | undefined = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "4px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: colorsTemplate.grey,
    [theme.breakpoints.up('md')]: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "20px",
    }
}


const btn: SxProps<Theme> | undefined = {
    height: "20px",
    fontFamily: fontsTemplate.Montserrat,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    color: `${colorsTemplate.slateBlue}`,
    [theme.breakpoints.up('md')]: {}
}




export const styles = {
    card,
    title,
    listItem,
    btn
}