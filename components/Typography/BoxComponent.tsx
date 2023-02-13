import { Box, Stack, Button } from "@mui/material"
const spongeBobUrl = 'https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/master/w_1600%2Cc_limit/bob_esponja_9564.png'

export const BoxComponent = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#F4a261',
                    minHeight: '100vh',

                }}
            >
                <Stack
                    sx={{
                        width: '200px',
                        margin: 'auto',
                    }}
                    spacing={1}
                >
                    <Box> Im a box </Box>
                    <Box sx={{ bgcolor: 'primary.main' }} color="primary">
                        Im a primary color box
                    </Box>

                    <Box sx={{ bgcolor: 'secondary.main' }} color="primary">
                        Im a primary color box
                    </Box>


                    <Box sx={{ m: 2 }}  >
                        margin 1
                    </Box>

                    <Box sx={{ p: 2 }}  >
                        margin 1
                    </Box>

                    <Box component='span'  >
                        span!!
                    </Box>
                    <Box component='img' src={spongeBobUrl}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', }}
                    >
                        {
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <Box key={`${index} sponge`}>
                                    <Box
                                        component='img'
                                        src={spongeBobUrl}
                                        sx={{ maxHeight: '50px' }}
                                    >
                                    </Box>
                                </Box>

                            ))
                        }


                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', }}
                    >
                        {
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <Box key={`${index} sponge`}>
                                    <Box
                                        component='img'
                                        src={spongeBobUrl}
                                        sx={{ maxHeight: '50px' }}
                                    >
                                    </Box>
                                </Box>

                            ))
                        }


                    </Box>
                </Stack>

            </Box>
        </>
    )
}