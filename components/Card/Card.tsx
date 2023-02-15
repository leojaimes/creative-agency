import { Box, Card, CardContent } from '@mui/material';
import React from 'react'
import { styles } from './styles';
const arrowRight = '/assets/img/arrow-right.svg'
const strategySvg = '/assets/img/strategy.svg'

export const CustomCard = () => {
    return (
        <Card sx={styles.style1}>
            <CardContent sx={{ padding: 0, }}>
                <Box component='img' src={strategySvg}></Box>
            </CardContent>
        </Card>
    )
}
