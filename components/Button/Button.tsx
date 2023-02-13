import { FC } from "react"
import { Button } from '@mui/material';


interface Props {
    children?: React.ReactNode
}
export const CustomButton: FC<Props> = ({ children }) => {
    return (
        <Button>
            {children}
        </Button>
    )
}