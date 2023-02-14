import { Box, Drawer } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { Navbar } from 'components/Nabvar';
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
            <Box
                sx={{ padding: '2px' }}
            >

                <IconButton sx={{ padding: '0', marginLeft: '5px    ' }} onClick={onClose}>
                    <img src={closeIcon} alt='closeIcon'></img>
                </IconButton>
                <Box sx={{ padding: '44px' }}>

                </Box>
            </Box>

        </Drawer>
    )
}