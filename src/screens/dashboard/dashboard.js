import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';
import { currentTimeText } from '../../utils/helperFunctions';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    }
}));

export const Dashboard = props => {

    const classes = useStyles();

    return <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Typography variant="h6">{currentTimeText()}</Typography>
                <Typography variant="body">logged in user</Typography>
            </Grid>
        </Grid>
    </div>
}