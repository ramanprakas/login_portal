import React from 'react';
import { Card, CardActions, Grid, Typography, CardContent } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    }
}));

export const SideCardEvent = (props) => {
    const { header, contentImg, contentLabel, footerLabel } = props;
    const classes = useStyles();

    return <div className={classes.root}>
        <Card sx={{ width: '100%', p: 2 }} >
            <Typography variant='h5' textTransform={'capitalize'}>{header}</Typography>

            <Grid textAlign={'center'}>
                <img src={contentImg} alt='events_logo' width={'200px'} height={'150px'} />
            </Grid>
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant='h5'>{contentLabel}</Typography>
            </CardContent>
            <CardActions>
                <Typography variant='body2'>{footerLabel}</Typography>
            </CardActions>
        </Card>
    </div>
}