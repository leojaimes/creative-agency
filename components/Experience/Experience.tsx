import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { styles } from './styles'

const dashboardPhoto = '/assets/img/dashboard-photo.svg'
const landingPagePhoto = '/assets/img/landing-page-photo.svg'
const illustrationPagePhoto = '/assets/img/illustration-page-photo.svg'


const links = [
    'Show all',
    'Desing',
    'Branding',
    'Development',
    'Seo',
    'UX/UI Design',
]


export const Experience = () => {
    return (
        <Box sx={styles.experience} >
            <Box sx={styles.wrapper}>
                <Typography variant="h2" color="initial">professional experience</Typography>
                <Typography variant="h2" color="initial">professional design agency to provide solutions</Typography>
                <Box sx={styles.links} >
                    {
                        links.map((link, index) => {
                            return (
                                <Link sx={styles.link} key={index} >
                                    {link}
                                </Link>
                            )
                        })
                    }
                </Box>
                <Grid container columns={{ xs: 12, sm: 6 * 2, md: 4 * 3 }} spacing={2} justifyContent='center'>
                    <Grid item xs={12} sm={6} md={4}   >
                        <Box>
                            <Box component='img' src={dashboardPhoto} sx={styles.imgItem} />
                            <Typography sx={styles.contentTitle}>dashborad design</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box>
                            <Box component='img' src={landingPagePhoto} sx={styles.imgItem} />
                            <Typography sx={styles.contentTitle}>landing pages</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box>
                            <Box component='img' src={illustrationPagePhoto} sx={styles.imgItem} />
                            <Typography sx={styles.contentTitle}>ilustration design</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
/**
 * 
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
 */