import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
 
 

// export default function CustomButton() {
//   return (
//     <Button>CustomButton</Button>
//   )
// 
  
 

interface Props {
    bgcolor?: string;
    txtcolor?: string; 
}
export const CustomButton = 
    styled
        (
            Button, 
            {
                shouldForwardProp: (prop) => prop !== ('success' || 'bgColor')
            }

        )
    (
        ( { bgcolor, txtcolor}: Props   )  =>
        (
            {
              border: '0',
              color:  txtcolor ? txtcolor : 'white',
              fontSize: '16px',
              fontWeight:  'bold',
              width: '200px',
              letterSpacing: '-0.1px',
              lineHeight: '24px',
              height: '48px',
              padding: '5px 10px',
              margin: '5px',
              textAlign: 'center',
              maxWidth: '320px',
              backgroundColor: bgcolor ? bgcolor : '#0055D2',
              boxShadow: 'iniset 0 0 0 1px #0055D2',
              textTransform: 'none',
            }
        )
    )


 