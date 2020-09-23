import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import Spinner from '../Spinner/Spinner';
import NotFound from '../../views/NotFound';
import routes from '../../routes';
import { getGlobalState } from '../../redux/operations/stateOperation';
import '../../css/vars.module.css';
import '../../index.module.css';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
import style from '../CustomRoutes/PrivateRoute.module.css';

const App = ({ getGlobalState, token }) => {
  const [isTestOpen, changeStateIsOpen] = useState(false);
  useEffect(() => {
    getGlobalState();
  }, [token, getGlobalState]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className={style.mainContainer}>
          {token && <LeftSideBar />}
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
            <Route component={NotFound} />
          </Switch>
          {token && <RightSideBar />}
        </div>
      </Suspense>
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.access_token,
  };
};

export default connect(mapStateToProps, { getGlobalState })(App);
