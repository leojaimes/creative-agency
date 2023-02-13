import { Box, Button, Stack, ButtonGroup } from "@mui/material"

import AddTaskIcon from '@mui/icons-material/AddTask';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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
                    <Button variant="contained" color="secondary" size="large">
                        {' '}
                        contained large
                    </Button>

                    <Button variant="contained" style={{
                        fontSize: '11px',
                        background: '#acb9eb',
                        color: 'black',

                    }}>
                        contained font size 11px
                    </Button>

                    <Button variant="text" color="primary" startIcon={<AddTaskIcon />} >
                        {' '}
                        Start icon
                    </Button>

                    <Button variant="text" color="primary" endIcon={<AddTaskIcon />} >
                        {' '}
                        End Icon
                    </Button>

                    <ButtonGroup variant="text" color="primary" aria-label="">
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<EditIcon />}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="warning"
                            startIcon={<HighlightOffIcon />}>
                            Delete
                        </Button>

                    </ButtonGroup>
                </Stack>
            </Box>
        </>
    )
}