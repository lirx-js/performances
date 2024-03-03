import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5842319169456533Component } from "./components/app-5842319169456533/app-5842319169456533.component";
import { App1959965144442693Component } from "./components/app-1959965144442693/app-1959965144442693.component";
import { App4022043962228305Component } from "./components/app-4022043962228305/app-4022043962228305.component";
import { App6153391034659295Component } from "./components/app-6153391034659295/app-6153391034659295.component";
import { App8082196236008663Component } from "./components/app-8082196236008663/app-8082196236008663.component";

// @ts-ignore
import html from './app-5614335188583313.component.html?raw';
// @ts-ignore
import style from './app-5614335188583313.component.scss?inline';

/**
 * COMPONENT: 'app-5614335188583313'
 */

export const App5614335188583313Component = new Component({
  name: 'app-5614335188583313',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5842319169456533Component,
App1959965144442693Component,
App4022043962228305Component,
App6153391034659295Component,
App8082196236008663Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
