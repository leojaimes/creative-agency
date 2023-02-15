import { Box, Button, Card, CardActionArea, CardActions, CardContent, List, ListItem, Typography } from '@mui/material';
import React, { FC } from 'react'
import { styles } from './styles';
import { CardModel } from 'components/CreativeDesign';
const arrowRight = '/assets/img/arrow-right.svg'



export const CustomCard: FC<CardModel> = ({ title, icon, listItems }) => {
    return (
        <Card sx={styles.card}>
            <CardContent sx={{ padding: 0, }}>
                <Box component='img' src={icon}></Box>
                <Typography sx={styles.title} variant='h3'>{title}</Typography>
                <List>
                    {
                        listItems.map((item, index) => {
                            return (
                                <ListItem sx={styles.listItem} key={index} >
                                    <Box sx={{ marginRight: '3px' }} component='img' src={arrowRight}></Box>
                                    <Typography sx={styles.listItem} >{item}</Typography>
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
