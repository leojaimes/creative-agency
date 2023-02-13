import { Box, Button, Stack } from "@mui/material"

import AddTaskIcon from '@mui/icons-material/AddTask';
import { minHeight } from "@mui/system";


export const MuiButton = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#BCF4F5',
                    minHeight: '100vh'
                }}
            >
                {/*<AddTaskIcon></AddTaskIcon>*/}

                <Stack
                    sx={{
                        width: '200px',
                        margin: 'auto',

                    }}
                    spacing={1}
                >
                    <Button>simple</Button>
                    <Button variant="contained">Contaained</Button>
                    <Button variant="outlined">outlined</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="https://google.com">
                        Google
                    </Button>
                    <Button variant="text" onClick={() => { alert('ButtonClicked') }}>
                        Clicked!!
                    </Button>
                </Stack>
            </Box>
        </>
    )
}