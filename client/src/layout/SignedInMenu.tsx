import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/store/configureStore"
import Person from '@mui/icons-material/Person';

export default function SignedInMenu(){
    const dispatch=useAppDispatch();
    const {user}=useAppSelector(state=>state.account);
    return(
        <Stack spacing={2}>
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Typography key={size} fontSize={size}  startIcon={<Person />}>
            Hello World
          </Typography>
        ))}
      </Stack>
      
    )
}