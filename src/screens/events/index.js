import React from "react";
import Events from './events';
import { withNavBars } from "../../HOCs";

class EventsParent extends React.Component {
    render() {
        return <Events />;
    }
}

export default withNavBars(EventsParent);
