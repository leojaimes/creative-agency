import { Box, Typography } from '@mui/material'
import { styles } from './styles';

const photo_send = '/assets/img/photo_send_2.png'
//SVG ICONS AND IMAGES
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const ContactUs = () => {
    return (
        <Box sx={styles.contactUs}>
            <Box sx={styles.wrapper}>
                <Box sx={styles.form}>
                    <Typography variant='h2'>mind! contact us</Typography>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
                        sagittis eget facilisi in in urna tristique risus. Tortor
                        consectetur nulla pretium malesuada porttitor.
                    </Typography>
                    <Box sx={styles.info}>
                        <Box sx={styles.itemBlockInfo}>
                            <Box sx={styles.titleInfo}>
                                <MailOutlineIcon sx={styles.imgInfo} />
                                email us
                            </Box>
                            <Box sx={styles.titleValue}>support@gmail.com</Box>
                        </Box>
                        <Box sx={styles.itemBlockInfo}>
                            <Box sx={styles.titleInfo}>
                                <LocalPhoneIcon sx={styles.imgInfo} />
                                phone us
                            </Box>
                            <Box sx={styles.titleValue}>+012 (345) 67 89</Box>
                        </Box>
                    </Box>
                </Box>
                <Box component='img' src={photo_send} sx={styles.photo} />
            </Box>
        </Box>
    )
}
