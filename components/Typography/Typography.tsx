import { Box, Stack, Typography } from '@mui/material';

export const MuiTypoGraphy = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundColor: '#F4A261'
                }}
            >
                <Stack
                    sx={{
                        width: '200px',
                        minHeight: '100vh',
                    }}
                >
                    <Typography variant="body1" color="initial">


                    </Typography>
                </Stack>

            </Box>
        </Box>
    )
}