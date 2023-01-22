import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import { sampleSideMenuJson } from '../../../utils';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        width: props => props?.isMobile ? drawerWidth : drawerWidth,
        position: 'absolute',
    },
    drawer: {
        height: props => props?.isMobile ? `100vh` : `calc(100vh - 64px)`,
        background: '#171640',
        color: "#fff",
        "& svg": { color: "#fff" },
        "& .Mui-selected": { background: "#46c3c370", "&:hover": { background: "#46c3c370" } },
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'hidden',
        height: 'calc(100vh - 64px)',
    },
}));

export const SideNavBar = (props) => {

    const classes = useStyles(props);
    const [subChild, setSubChild] = React.useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const onListClick = (data) => {
        debugger
        if (data.link) {
            navigate(data.link)
        }
    };
    const handleOPenChildMenu = (index) => {
        setSubChild(index === subChild ? null : index)
    };


    return (
        <div className={classes.root}>
            <Paper
                className={classes.drawer}
                square
            >
                <div className={classes.drawerContainer}>
                    <List>
                        {sampleSideMenuJson.map((navBar, index) => (
                            <> <ListItem onClick={(e) => navBar?.subMenus?.length > 0 ?
                                handleOPenChildMenu(index) : onListClick(navBar)}
                                button
                                key={index}
                                selected={
                                    location.pathname === navBar.link}
                            >
                                {navBar.icon}&nbsp;
                                <ListItemText primary={navBar.name} />
                                {navBar?.subMenus?.length > 0 ? index === subChild ? <ExpandLess /> : <ExpandMore /> : ''}
                            </ListItem>

                                {navBar?.subMenus?.length > 0 && <Collapse in={index === subChild} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {navBar?.subMenus?.map(child => {
                                            return <ListItemButton sx={{ pl: 4 }}
                                                onClick={(e) => onListClick(navBar)}>
                                                {child?.icon}&nbsp;
                                                <ListItemText primary={child?.name} />
                                            </ListItemButton>
                                        })}
                                    </List>
                                </Collapse>}</>
                        ))}
                    </List>
                </div>
            </Paper >
        </div >
    );
}
