import { Button } from '@mui/material'
import { FC } from 'react'
import { styles } from './styles'
import { theme } from 'theme/theme';

interface Props {
   txtColor?: string;  
   bgColor?: string ;
   children?: React.ReactNode;
  
}
export const FCustomButton: FC<Props> = ({ txtColor, bgColor, children })=> {
    return (
        <Button sx={ styles.btn( theme, txtColor, bgColor )}   >{ children }</Button>
    )
}