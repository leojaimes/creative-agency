import { Box, Stack, Typography } from '@mui/material';

export const MuiTypoGraphy = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundColor: '#F4A261',
                    minHeight: '100vh',
                }}
            >
                <Stack
                    sx={{
                        width: '200px',
                        margin: 'auto',

                    }}
                >
                    <Typography variant="h2" color="initial"> este es un h2 tiene avenir </Typography>
                    <Typography variant="h3" color="initial"> lalalrar fdsfdjskfdsj </Typography>
                    <Typography variant="subtitle1" color="initial">Im subtitle1</Typography>
                    <Typography variant="subtitle2" color="initial">Im subtitle2</Typography>
                    <Typography variant="body1" color="initial">Im body1</Typography>
                    <Typography variant="body2" color="initial">Im body2</Typography>
                    <Typography variant="overline" color="primary">Overline</Typography>
                    <Typography variant="h4" style={{ color: '#2A9D8F' }}> Im h4</Typography>
                </Stack>

            </Box>
        </Box>
    )
}