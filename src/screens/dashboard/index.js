import React from "react";
import { withNavBars } from "../../HOCs";
import { Dashboard } from "./dashboard";

class DashboardParent extends React.Component {
  render() {
    return <Dashboard />;
  }
}

export default withNavBars(DashboardParent);
