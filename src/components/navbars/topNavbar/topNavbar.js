import { Logout, Menu as MenuIcon, PersonAdd, Settings } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AppBar, Avatar, Divider, Drawer, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SideNavBar } from '..';
import { AppRoutes } from '../../../router/routes';
import { LocalStorageKeys } from '../../../utils';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#fff", color: "#000",
        boxShadow: 'none',
    },
    title: {
        display: 'block',
    },
    titleContainer: {
        marginLeft: theme.spacing(2)
    },
    menuIcon: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    drawer: {
        height: "100vh",
        background: '#47525d',
        color: "#dcdce0",
    }
}));

export const TopNavBar = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        openSideNavBar: false
    })

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notification, setNotification] = React.useState(null);

    const open = Boolean(anchorEl);
    const notificationopen = Boolean(notification);

    const handleProfileToggleFunction = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileToggleFunctionClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationFunction = (event) => {
        setNotification(event.currentTarget);
    };

    const handleNotificationFunctionClose = () => {
        setNotification(null);
    };

    const toogleSideNavBar = () => {
        setState({
            ...state,
            openSideNavBar: !state.openSideNavBar
        })
    };

    const logout = () => {
        localStorage.clear();
        navigate(AppRoutes.login)
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>

                    <IconButton className={classes.menuIcon} onClick={() => toogleSideNavBar()} size="large">
                        <MenuIcon />
                    </IconButton>

                    <div className={classes.titleContainer}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Logo & Company Name
                        </Typography>
                        <Typography variant="caption">
                            {`v${localStorage.getItem(LocalStorageKeys.version)}`}
                        </Typography>
                    </div>

                    <div className={classes.grow} />

                    <IconButton
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={notificationopen ? 'notification-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={notificationopen ? 'true' : undefined}
                        onClick={handleNotificationFunction}
                    >
                        <NotificationsNoneIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleProfileToggleFunction}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32, bgcolor: '#fd7e97' }}>P</Avatar>
                    </IconButton>

                    <Drawer
                        open={state.openSideNavBar}
                        variant={"temporary"}
                        anchor="left"
                        onClose={toogleSideNavBar}
                    >
                        <div style={{ width: 200 }} className={classes.drawer}>
                            <SideNavBar isMobile={true} />
                        </div>
                    </Drawer>

                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={notification}
                id="notification-menu"
                open={notificationopen}
                onClose={handleNotificationFunctionClose}
                onClick={handleNotificationFunctionClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    Soon...
                </MenuItem>
            </Menu>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleProfileToggleFunctionClose}
                onClick={handleProfileToggleFunctionClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => logout()}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}
