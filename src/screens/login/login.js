import React from 'react';
import {
    Avatar,
    Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, Hidden, IconButton,
    InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography
} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/routes';
import { LoginSuccess } from "../../router/access";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';
import FaceBook from '../../assets/facebook-social-icon.svg';
import Github from '../../assets/github.png';
import Google from '../../assets/google.png';
import Twitter from '../../assets/twitter.png';
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: "0"
    },
    welcome: {
        color: '#000',
        fontWeight: 600,
        marginBottom: 3,
    },
    login: {
        padding: '11px',
        fontSize: 16,
        fontWeight: 600,
        borderRadius: '6px',
        backgroundColor: '#9155fd',
        marginBottom: 6,
        '& :hover': {
            textDecoration: 'none',
            backgroundColor: '#804bdf',
            boxShadow: '#3a35418f 0px 6px 18px -8px'
        }
    },
    forget: {
        cursor: 'pointer'
    }
}))

export const Login = props => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);

    const onLogin = () => {
        localStorage.setItem(LocalStorageKeys.authToken, "authtoken");
        navigate(AppRoutes.dashboard);
    }

    React.useEffect(() => {
        if (localStorage.getItem(LocalStorageKeys.authToken)) {
            navigate(LoginSuccess())
        }
        console.log("here")
    })

    // Password hide and show function
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return <div className={classes.root}>
        <Grid container spacing={2}>
            <Hidden mdDown={true}>
                <Grid item md={8} sm={8} bgcolor={'#f4f5fa'}>
                    <img src='https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/pages/auth-v2-login-illustration-light.png' width={'100%'} height={'100%'} alt='al' />
                </Grid>
            </Hidden>
            {/* login section */}
            <Grid item xs={12} md={4} sm={12} textAlign={'start'}>
                <Box padding={'10px 23px'} marginTop={'13%'}>
                    <Typography variant="h5" className={classes.welcome}>
                        Welcome to Login! 👋🏻
                    </Typography>

                    <Typography variant='body2' color={'#3a354199'} marginBottom={4}>
                        Please sign-in to your account and start the <br /> adventure
                    </Typography>

                    <TextField id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{ width: '100%', marginBottom: 2 }} />

                    <FormControl sx={{ width: '100%', marginBottom: 0 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} marginBottom={3}>
                        <div>
                            <FormControlLabel control={<Checkbox color='secondary' defaultChecked />} label="Remember Me"
                                sx={{ color: '#af9d99', fontSize: '12px' }} />
                        </div>
                        <div>
                            <Typography variant='body1' color={'#9f76fd'} className={classes.forget}>Forgot Password?</Typography>
                        </div>
                    </Grid>
                    <Button
                        className={classes.login}
                        variant={"contained"}
                        onClick={onLogin}
                        fullWidth={true}
                    >
                        LogIn
                    </Button>

                    <Grid display={'flex'} justifyContent={'space-around'} alignItems={'center'} marginBottom={4} >
                        <Typography variant='body2' color={'#af9d99'}>
                            New on our platform?
                        </Typography>
                        <Typography variant='body2' color={'#9f76fd'} className={classes.forget}>
                            Create an account
                        </Typography>
                    </Grid>

                    <Divider textAlign="center">Or</Divider>
                    <br />
                    <Stack direction="row" spacing={1} display={'flex'} justifyContent={'center'} >
                        <Avatar alt="Remy Sharp"
                            src={FaceBook}
                            sx={{ width: 35, height: 35, cursor: 'pointer' }} />
                        <Avatar alt="Travis Howard"
                            src={Twitter}
                            sx={{ width: 35, height: 35, cursor: 'pointer' }}
                        />
                        <Avatar alt="Cindy Baker"
                            src={Github}
                            sx={{ width: 35, height: 35, cursor: 'pointer' }}
                        />
                        <Avatar alt="Cindy Baker"
                            src={Google}
                            sx={{ width: 35, height: 35, cursor: 'pointer' }}
                        />
                    </Stack>
                </Box>
            </Grid>
        </Grid>


    </div >
}
