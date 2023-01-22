import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from "moment";
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
    },
    cardBody: {
        textAlign: "center",
    },
    title: {
        fontSize: 16
    },
    title_discription: {
        fontSize: 14
    }
}));

export default function DashboardCradComponent(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <Card className={classes.root}>
            <CardHeader
                action={<MoreHorizIcon />}
                title={<span className={classes.title}>{title ?? ''}</span>}
                subheader={<span className={classes.title_discription}>{moment().format('MMM DD, YYYY hh:mm A')}</span>}
            />

            <CardContent className={classes.cardBody}>
                <Typography variant="body2" color="text.secondary">
                    <BlurOnOutlinedIcon sx={{ fontSize: 100 }} /><br />
                    No Data!.
                </Typography>
            </CardContent>
        </Card>
    );
}