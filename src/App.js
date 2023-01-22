import { CssBaseline } from "@mui/material";
import React from "react";
import { AppAlert } from "./App.alert";
import { AppAuth } from "./App.auth";
import { AppBackDrop } from "./App.backdrop";
import { AppDialog } from "./App.dialog";
import { AppDrawer } from "./App.drawer";
import AppErrorBoundary from "./App.errorBoundry";
import AppFirebase from "./App.firebase"; //For Push Notification thing
import { AppTheme } from "./App.theme";
import { AppRedux } from "./redux";
import RouterApp from "./router";

const App = () => {
  return (
    <AppRedux>
        <AppErrorBoundary>
          <AppAuth>
            <AppTheme>
              <CssBaseline />
              <AppAlert>
                <AppDialog>
                  <AppDrawer>
                    <AppBackDrop>
                      <AppFirebase>
                        <RouterApp />
                      </AppFirebase>
                    </AppBackDrop>
                  </AppDrawer>
                </AppDialog>
              </AppAlert>
            </AppTheme>
          </AppAuth>
        </AppErrorBoundary>
    </AppRedux>
  );
}
export default App;