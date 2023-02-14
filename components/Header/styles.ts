import { Theme, SxProps } from '@mui/system';


export const styles = {

    appBar: (theme: Theme): SxProps<Theme> | undefined => ({


        [theme.breakpoints.up('md')]: {

        }
    }),

    container: (theme: Theme): SxProps<Theme> | undefined => ({

        [theme.breakpoints.up('md')]: {

        }
    }),


    toolbar: (theme: Theme): SxProps<Theme> | undefined => ({

        [theme.breakpoints.up('md')]: {

        }
    })

}