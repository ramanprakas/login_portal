import React from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Button, Checkbox, FormControl, FormControlLabel, Grid, Hidden, IconButton,
    InputAdornment, InputLabel, OutlinedInput, TextField, Typography
} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
// import { LoginSuccess } from "../../router/access";
import { AppRoutes } from '../../router/routes';
import { LocalStorageKeys } from '../../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        height: "100vh",
        overflow: "hidden"
    },
    welcome: {
        color: '#000',
    },
    login: {
        padding: '11px',
        fontSize: 16,
        fontWeight: 600,
        borderRadius: '6px',
        background: '#171640',
        marginBottom: 10,
    },
    forget: {
        cursor: 'pointer',
        textDecoration: "underline"
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

    // React.useEffect(() => {
    //     if (localStorage.getItem(LocalStorageKeys.authToken)) {
    //         navigate(LoginSuccess(AppRoutes.dashboard))
    //     }
    // }, []);

    // Password hide and show function
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return <div className={classes.root}>
        <Grid container spacing={2}>
            <Hidden mdDown={true}>
                <Grid item md={8} sm={8} bgcolor={'#f4f5fa'}>
                    <img src='https://minimals.cc/assets/illustrations/illustration_dashboard.png'
                        style={{ objectFit: 'scale-down' }}
                        width={'100%'} height={'100%'} alt='login_page_logo' />
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
                                        onClick={() => handleClickShowPassword()}
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
                                sx={{ color: '#000', fontSize: '12px' }} />
                        </div>
                        <div>
                            <Typography variant='body1' color={'#fd7e97'} className={classes.forget}>Forgot Password?</Typography>
                        </div>
                    </Grid>

                    <Button
                        className={classes.login}
                        variant={"contained"}
                        onClick={() => onLogin()}
                        fullWidth={true}
                    >
                        LogIn
                    </Button>

                    <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} marginBottom={4} >
                        <Typography variant='body2' color={'#000'}>
                            New on our platform?
                        </Typography>
                        <Typography variant='body2' color={'#fd7e97'} className={classes.forget}>
                            Create an account
                        </Typography>
                    </Grid>

                </Box>
            </Grid>
        </Grid>
    </div>
}
