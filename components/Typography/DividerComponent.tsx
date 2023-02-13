import { Box, Divider } from "@mui/material"

export const DividerComponent = () => {
    return (
        <Box sx={{ padding: '10px', minHeight: '100vh' }}>
            <Divider
                sx={{ backgroundColor: '#8ECAE6', my: '50px' }}
            />
            <Divider
                light
                sx={{ my: '5px' }}
            />
            <Divider
                variant="inset"
                sx={{ backgroundColor: '#9980B7', borderBottomWidth: 5, my: '50px' }}
            />

            <Divider
                variant="middle"
                sx={{ backgroundColor: '#219EBC', borderBottomWidth: 5, my: '50px' }}
            />
            <Divider sx={{ my: '50px' }}>Center</Divider>
        </Box>
    )
}