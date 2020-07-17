import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundry from "./helpers/ErrorBoundry";
import ProtectedRoute from "./routes/ProtectedRoute";
import Authentication from "./context/Authentication";
import PageNotFound from "./pages/PageNotFound";
import Private from "./pages/Private";
import Public from "./pages/Public";

const App = () => {
  return (
    <ErrorBoundry>
      <Authentication>
        <BrowserRouter>
          <Switch>
            <Route
              path="/public"
              component={(props) => <Public {...props} />}
            />
            <ProtectedRoute path="/private" Component={Private} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Authentication>
    </ErrorBoundry>
  );
};

export default App;
