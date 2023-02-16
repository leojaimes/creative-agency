import { SxProps, Theme } from "@mui/material/styles"
import { CSSProperties } from "react"
import { theme, colorsTemplate } from "theme"

const contactUs: SxProps<Theme> | undefined = {
    padding: '44px 20px',
    textAlign: 'left',
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'center',
        padding: '200px 20px 190px',
    },
}

const wrapper: SxProps<Theme> | undefined = {

    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1240px',
        alignItems: 'center',
        gap: '120px',
    }

}

const form: SxProps<Theme> | undefined = {
    maxWidth: '613px',
    [theme.breakpoints.up('sm')]: {
        margin: 'auto',
    }
}

const photo: SxProps<Theme> | undefined = {
    width: '100%',
    margin: '44px auto 0',
    maxWidth: '508',
    display: 'block',
}

const info: SxProps<Theme> | undefined = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
}

const titleInfo: SxProps<Theme> | undefined = {
    color: colorsTemplate.slateBlue,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
}
const imgInfo: SxProps<Theme> | undefined = {

}
const titleValue: SxProps<Theme> | undefined = {
    color: '#000000',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '3px',
}
const itemBlockInfo: SxProps<Theme> | undefined = {
    marginBottom: '24px',
    flex: 1,
}

const input: SxProps<Theme> | undefined = {
    display: 'flex',
    gap: '25px',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
    },
}
const textField: SxProps<Theme> | undefined = {
    width: '300px',
    '& input::placeholder': {
        fontSize: '20px',
        lineHeight: '20px',
    },
}

const textareaAutosize: CSSProperties | undefined = {
    margin: '24px 0',
    padding: '12px',
    width: '100%',
    fontSize: '20px',
    lineHeight: '20px',
    border: '0.5px solid #777FEB',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
}

export const styles = {
    contactUs,
    wrapper,
    form,
    photo,
    info,
    itemBlockInfo,
    titleInfo,
    imgInfo,
    titleValue,
    input,
    textField,
    textareaAutosize,
}