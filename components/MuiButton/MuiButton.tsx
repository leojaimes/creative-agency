import { Button, Stack } from "@mui/material"

import AddTaskIcon from '@mui/icons-material/AddTask';
import { minHeight } from "@mui/system";


export const MuiButton = ()=> {
    return (
        <>
            <Button
                sx= {{
                    backgroundColor: '#BCF4F5',
                    minHeight: '100vh'
                }}
            >
                <AddTaskIcon></AddTaskIcon>
            </Button>
            <Stack
                sx= {{
                    width: '200px',
                    margin: 'auto',

                }}
                spacing={1}
            >
                <Button>simple</Button>
            </Stack>
           
        </>
       
    )
}