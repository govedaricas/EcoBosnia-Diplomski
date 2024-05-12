
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {FieldValues, useForm} from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInUser } from '../Account/AccountSlice';
import { useAppDispatch } from '../../app/store/configureStore';


  const defaultTheme = createTheme();


export default function SignIn(){

    const navigate=useNavigate();
    const dispatch=useAppDispatch();
    const location=useLocation();

    const{register,handleSubmit,formState:{isSubmitting,errors,isValid}}=useForm({
      mode:'onChange'
    });

    async function submitForm(data:FieldValues){
     try {
      const result=await dispatch(signInUser(data));
      navigate(location.state?.from ||'/about/all');
     } catch (error) {
      console.error('Login failed',error);
     }

 }
 const style={
  marginBottom: '125px'
}
    
    return(
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={style}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              autoFocus
              {...register("username",{required:'Username is required'})}
              error={!!errors.username}
              helperText={errors?.username?.message as string}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              {...register("password",{required:'Password is required'})}
              error={!!errors.password}
              helperText={errors?.password?.message as string}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              disabled={!isValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    )
}