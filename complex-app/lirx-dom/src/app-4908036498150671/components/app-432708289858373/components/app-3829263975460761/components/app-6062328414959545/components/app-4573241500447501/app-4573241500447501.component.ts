import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2276297971091519Component } from "./components/app-2276297971091519/app-2276297971091519.component";
import { App2040349953189247Component } from "./components/app-2040349953189247/app-2040349953189247.component";
import { App8285939570038343Component } from "./components/app-8285939570038343/app-8285939570038343.component";
import { App8215832454746087Component } from "./components/app-8215832454746087/app-8215832454746087.component";
import { App5127412034453329Component } from "./components/app-5127412034453329/app-5127412034453329.component";

// @ts-ignore
import html from './app-4573241500447501.component.html?raw';
// @ts-ignore
import style from './app-4573241500447501.component.scss?inline';

/**
 * COMPONENT: 'app-4573241500447501'
 */

export const App4573241500447501Component = new Component({
  name: 'app-4573241500447501',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2276297971091519Component,
App2040349953189247Component,
App8285939570038343Component,
App8215832454746087Component,
App5127412034453329Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
