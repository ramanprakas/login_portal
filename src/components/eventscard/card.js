import React from 'react';
import { Button, Card, CardActions, Grid, Typography, CardContent } from '@mui/material';
import { makeStyles } from "@mui/styles";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    }
}));

export const CardEvent = (props) => {
    const { headerImg, headerDate, cardLeftImg, userLogo, userMsg, msg } = props;
    const classes = useStyles();

    return <div className={classes.root}>
        <Card sx={{ width: '100%', p: 2 }} >
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <div>
                    <img src={headerImg} alt='events_logo' width={'100px'} height={'100px'} />
                </div>
                <Typography variant="body2" color="text.secondary">
                    {headerDate}
                </Typography>
            </Grid>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4} sm={4}>
                        <img src={cardLeftImg} alt='events_logo' width={'150px'} height={'150px'} />
                    </Grid>
                    <Grid item xs={6} md={8} sm={8} margin={'auto'}>
                        <Typography>{msg}</Typography>
                        <br />
                        <Grid display={'flex'} >
                            <img src={userLogo} alt='user_logo' width={'30px'} height={'30px'} /> &nbsp;
                            <Typography variant='h5'>{userMsg}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <ThumbUpOutlinedIcon /> &nbsp;likes</Button>
                <Button size="small">
                    <ChatOutlinedIcon /> &nbsp;comments</Button>
            </CardActions>
        </Card>
    </div>
}