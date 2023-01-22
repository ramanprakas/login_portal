import { makeStyles } from "@mui/styles";
import React from "react";
import { SideNavBar, TopNavBar } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
  content: {
    width: '100%',
    height: 'calc(100% - 64px)',
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 200
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    }
  },
  topNavbar: {
  },
  sideNavbar: {
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  }
}));

const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });

  return (
    <div className={classes.root}>
      {/* Your nav bars here */}
      <div className={classes.topNavbar}>
        <TopNavBar />
      </div>

      {<div className={classes.sideNavbar}>
        <SideNavBar />
      </div>}

      {/* Content */}
      <div className={classes.content}>
        <Component {...props}>{props.children}</Component>
      </div>
    </div>
  );
};

export default withNavBars;
