import React, { Suspense, useState } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import routes from '../../routes';
import '../../css/vars.module.css';
import '../../index.module.css';
import Spinner from '../Spinner/Spinner';
import DailyResult from '../DailyHabit/DayliResult';
import ModalInterview from '../ModalInterview/ModalInterview';
import Congratulations from '../Congratulations/Congratulations';
import CastomHabit from '../CustomHabit/CastomHabit';
// import modalBackDrop from "../ModalBackDrop/ModalBackDrop";

const App = () => {
  const [isTestOpen, changeStateIsOpen] = useState(false);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
        </Switch>
      </Suspense>
      {/* <button
        onClick={() => changeStateIsOpen(prev => !prev)}
        style={{
          position: 'absolute',
          top: 0,
          width: '200px',
          height: '50px',
          fontSize: '18px',
        }}
      >
        Show Modal
      </button>
      {isTestOpen && <ModalInterview close={changeStateIsOpen} />} */}

      <button onClick={() => changeStateIsOpen(prev => !prev)}>
        OpenModal
      </button>
      {isTestOpen && <Congratulations close={changeStateIsOpen} />}
    </>
  );
};

export default App;
