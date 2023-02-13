import { FC } from "react"
import { Button } from '@mui/material';

import { styles } from './styles'
import { theme } from 'theme';
interface Props {
    children?: React.ReactNode
}
export const CustomButton: FC<Props> = ({ children }) => {
    return (
        <Button
            sx={styles.btn(theme)}
        >
            {children}
        </Button>
    )
}