import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3378284685260413Component } from "./components/app-3378284685260413/app-3378284685260413.component";
import { App8443410497353993Component } from "./components/app-8443410497353993/app-8443410497353993.component";
import { App6186410269579185Component } from "./components/app-6186410269579185/app-6186410269579185.component";
import { App4463767251809769Component } from "./components/app-4463767251809769/app-4463767251809769.component";
import { App8014116122002065Component } from "./components/app-8014116122002065/app-8014116122002065.component";

// @ts-ignore
import html from './app-5756021622870965.component.html?raw';
// @ts-ignore
import style from './app-5756021622870965.component.scss?inline';

/**
 * COMPONENT: 'app-5756021622870965'
 */

export const App5756021622870965Component = new Component({
  name: 'app-5756021622870965',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3378284685260413Component,
App8443410497353993Component,
App6186410269579185Component,
App4463767251809769Component,
App8014116122002065Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
