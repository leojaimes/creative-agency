import { Box, Button, Card, CardActionArea, CardActions, CardContent, List, ListItem, Typography } from '@mui/material';
import React, { FC } from 'react'
import { styles } from './styles';
const arrowRight = '/assets/img/arrow-right.svg'


interface Props {
    title: string;
    icon: string;
    listItems: string[];
}
export const CustomCard: FC<Props> = ({ title, icon, listItems }) => {
    return (
        <Card sx={styles.card}>
            <CardContent sx={{ padding: 0, }}>
                <Box component='img' src={icon}></Box>
                <Typography sx={styles.title} variant='h3'>{title}</Typography>
                <List>
                    {
                        listItems.map((item, index) => {
                            return (
                                <ListItem key={index} sx={styles.listItem}>
                                    <Box component='img' src={arrowRight}></Box>
                                    <Typography>{item}</Typography>
                                </ListItem>
                            )
                        })
                    }

                </List>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
                <Button sx={styles.btn}>
                    Read more
                    <Box component='img' src={arrowRight}></Box>
                </Button>
            </CardActions>
        </Card>
    )
}
