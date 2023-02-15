import { Box, Typography } from "@mui/material"
import { CustomButton } from "components";
import { styles } from './styles';

const photoBanner = '/assets/img/photo_banner.png'
export const Hero = () => {
    return (
        <Box sx={styles.hero} >
            <Box sx={styles.wrapper}>
                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant='h2'>The most Advanced Education</Typography>
                    <Typography sx={styles.text} variant='body1'>
                        Choose out of 2500+ mentors. Trusted by 250k users.<br />
                        Industry experts and top university professors Runs in a browser. Can be downloaded on desktop, tablet and mobiles. Extremely fast loading at 200ms. Updates work directory from the website.
                    </Typography>
                    <CustomButton> Join us </CustomButton>
                </Box>
                <Box sx={styles.photo} component='img' src={photoBanner}></Box>

            </Box>
        </Box>
    )
}
