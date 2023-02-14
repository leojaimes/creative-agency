import { Box, Button } from '@mui/material';
import NextImage from 'next/image';
import { theme } from 'theme/theme';
import { styles } from './styles';
const arrow = '/assets/img/chevron-down.svg'

interface page {
    title: string;
    arrow: boolean;

}
const pages: page[] = [
    {
        title: 'Demos',
        arrow: true,

    },
    {
        title: 'Services',
        arrow: true,

    },
    {
        title: 'Pages',
        arrow: true,

    },
    {
        title: 'Portfolio',
        arrow: true,

    },
    {
        title: 'Blog',
        arrow: true,

    },
    {
        title: 'Contact',
        arrow: false,

    },
]
export const Navbar = () => {
    return (
        <Box
            sx={{ flexGrow: 1, display: { lg: 'flex' }, justifyContent: 'flex-end' }}
        >
            {
                pages.map((page, index) => (
                    <Button
                        key={index}
                        sx={styles.btnLink(theme)}
                    >
                        {page.title}
                        {page.arrow && (
                            <img src={arrow} style={{ marginLeft: '5px', }} alt="arrow" />

                        )}

                    </Button>
                )
                )
            }

        </Box>
    )
}