import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login.js";
import Job from "../pages/job.js";
import JobDetails from "../pages/jobdetails.js";
import ProtectedRoute from "./ProtectedRoute.js";
import ErrorPage from "../pages/404page.js";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Job} />
      <Route path="/login" exact component={Login} />
      <ProtectedRoute
        path="/detail/:id"
        render={(props) => <JobDetails name="Meo" />}
      />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
