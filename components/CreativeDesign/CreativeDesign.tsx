import { Box, Stack, Typography } from "@mui/material"
import { CustomCard } from "components"
import { FC } from "react"
import { styles } from './styles'


export interface CardModel {
    icon: string;
    title: string;
    listItems: string[];
}

interface Props {
    cards: CardModel[]
}



export const CreativeDesign: FC<Props> = ({ cards }) => {
    return (
        <Box sx={styles.creativeDesign}>
            <Box sx={styles.wrapper}>
                <Typography variant='h2'>creative design solutions</Typography>
                <Typography sx={{ margin: '25px 0' }} variant='body1'>professional deign agency to provide solutions </Typography>
                <Stack direction="row" spacing={2}>
                    {
                        cards.map(({ icon, title, listItems }, index) => {
                            return (
                                <CustomCard key={index} icon={icon} title={title} listItems={listItems} />
                            )
                        })
                    }
                </Stack>
            </Box>
        </Box>
    )
}
