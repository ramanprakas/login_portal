import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import React, { useEffect } from 'react';
import DashboardCradComponent from '../../components/dashBoardCard';
import { dashBoardWiedgets } from '../../utils';
import { currentTimeText } from '../../utils/helperFunctions';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    },
    dayRoot: {
        marginBottom: 20
    }
}));

export const Dashboard = props => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        quotes: []
    });

    useEffect(() => {
        const fetchBusinesses = () => {
            let baseURL = 'https://type.fit/api/quotes';
            axios.get(baseURL).then((response) => {
                setState({ ...state, quotes: response.data });
            }).catch(err => {
                console.log('dashboard quotes', err)
            });
        };
        fetchBusinesses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className={classes.root}>

        <Grid container spacing={2} className={classes.dayRoot}>
            <Grid item xs={12}>
                <Typography variant="h6">{currentTimeText() + '(logged in user)'}</Typography>
                <Typography variant="body">{state?.quotes?.[0]?.text}</Typography><br />
                <Typography variant="body"> Author : - {state?.quotes?.[0]?.author}</Typography>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            {dashBoardWiedgets?.map(value => {
                return <Grid item xs={12} md={4}>
                    <DashboardCradComponent {...value} />
                </Grid>
            })}
        </Grid>

    </div>
}