import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';

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
                <Typography variant="h6">Good Afternoon!</Typography>
            </Grid>
        </Grid>
    </div>
}