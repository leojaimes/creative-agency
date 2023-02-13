import { Box, Link, Stack } from "@mui/material"

export const LinkComponent = () => {
    return (
        <Box>
            <Box>
                <Stack
                    sx={{ width: '200px', margin: '50px auto' }}
                    spacing={1}
                >
                    <Link>Default Link</Link>
                    <Link underline="none">Default Link</Link>
                    <Link underline="hover">Default Link</Link>
                    <Link color="error" variant="h1">error</Link>
                    <Link target="_blank" href="https://google.com">google</Link>
                </Stack>

            </Box>
        </Box>
    )
}