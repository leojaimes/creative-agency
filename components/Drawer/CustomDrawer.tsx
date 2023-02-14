import { Box, Drawer } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { FC } from 'react'
const closeIcon = '/assets/img/close.svg'
interface Props {
    open: boolean;
    onClose: () => void;

}
export const CustomDrawer: FC<Props> = ({ open, onClose }) => {
    return (
        <Drawer
            PaperProps={{
                sx: { width: '100%' }
            }}
            anchor='left'
            open={open}
            onClose={onClose}
        >
            <IconButton aria-label="" >

            </IconButton>
        </Drawer>
    )
}