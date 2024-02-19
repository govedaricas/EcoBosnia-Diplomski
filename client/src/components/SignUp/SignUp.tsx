
import { Typography, CssBaseline, Box, Avatar, Grid, TextField, ThemeProvider,Container,Link,createTheme, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import agent from '../../api/agent';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp(){
  const navigate=useNavigate();
  const{register,handleSubmit,setError,formState:{isSubmitting,errors,isValid}}=useForm({
    mode:'all'
  });
  function handleApiErrors(errors:any){
    if(errors){
      errors.forEach((error:string) => {
        if(error.includes('Password')){
          setError('password',{message:error})
        }else if(error.includes('Email')){
          setError('email',{message:error})
        }else if(error.includes('Username')){
          setError('username',{message:error})
        }
      });
    }
  }
    return(
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(data=>agent.Account.register(data)
          .then(()=>{
            navigate('/signIn');
          })
          .catch(error=>handleApiErrors(error)))}
             sx={{ mt: 1 }}>
                <TextField
                  required
                  margin='normal'
                  fullWidth
                  label="Username"
                  autoFocus
                  autoComplete='username'
                  {...register("username",{required:'Username is required'})}
                  error={!!errors.username}
                  helperText={errors?.username?.message as string}
                />
                <TextField
                  required
                  margin='normal'
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  {...register("email",{
                    required:'Email is required',
                    pattern:{
                      value:/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                      message:'Not a valid email address'
                    }
                  })}
                  error={!!errors.email}
                  helperText={errors?.email?.message as string}
                />
                <TextField
                  required
                  margin='normal'
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  {...register("password",{
                    required:'Password is required',
                    pattern:{
                      value:/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                      message:'Password does not meet complexity requirements'
                    }
                  })}
                  error={!!errors.password}
                  helperText={errors?.password?.message as string}
                />
            <Button
              disabled={!isValid}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>  
    )
}