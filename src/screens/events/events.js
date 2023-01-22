import React from "react";
import { CardEvent } from "../../components/eventscard/card";
import EventsLogo from '../../assets/events.png';
import Congratulations from '../../assets/congratulation.png';
import userLogo from '../../assets/userlogo.png';
import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { SideCardEvent } from "../../components/eventscard/sidecard";

const data = [
    {
        img: EventsLogo,
        data: '22 Jan 2023',
        left: Congratulations,
        user: userLogo,
        msg: 'I saw you work so hard every day to achieve ...',
        name: 'Mr smart'
    }, {
        img: EventsLogo,
        data: '22 Jan 2023',
        left: Congratulations,
        user: userLogo,
        msg: 'I saw you work so hard every day to achieve ...',
        name: 'Mr smart'
    }, {
        img: EventsLogo,
        data: '22 Jan 2023',
        left: Congratulations,
        user: userLogo,
        msg: 'I saw you work so hard every day to achieve ...',
        name: 'Mr smart'
    }, {
        img: EventsLogo,
        data: '22 Jan 2023',
        left: Congratulations,
        user: userLogo,
        msg: 'I saw you work so hard every day to achieve ...',
        name: 'Mr smart'
    }
]
class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            age: ''
        }
    }

    handleChange = (e) => {
        // this.setState(e.target.value);
    };

    render() {
        return <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography> Sort:</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        variant="standard"
                        value={this.state.age}
                        onChange={(e) => this.handleChange(e)}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container spacing={1}>
                {data?.map((v) => <Grid item xs={12} sm={12} md={8}>
                    <CardEvent
                        headerImg={v?.img}
                        headerDate={v?.data}
                        cardLeftImg={v?.left}
                        userLogo={v?.user}
                        msg={v?.msg}
                        userMsg={v?.name}
                    />
                </Grid>)}
                <Grid item xs={12} sm={12} md={4}>
                    <SideCardEvent
                        header={'Hightlights'}
                        contentImg={EventsLogo}
                        contentLabel={'Mr smart'}
                        footerLabel={'I saw you work so hard every day to achieve ...'}
                    />
                </Grid>
            </Grid>
        </div>
    }
}

export default Events;
