import React from 'react';
import { Switch } from 'react-router-dom';

import { MyRoute } from './MyRoute';
import { Menus } from '../pages/Menus';
import { Page404 } from '../pages/Page404';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <MyRoute exact path="/" component={Menus} isClosed />
      <MyRoute exact path="/Logout" component={Page404} isClosed />
    </Switch>
  );
}
