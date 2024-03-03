import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4554074480573389Component } from "./components/app-4554074480573389/app-4554074480573389.component";
import { App8684786824669889Component } from "./components/app-8684786824669889/app-8684786824669889.component";
import { App6441426328663347Component } from "./components/app-6441426328663347/app-6441426328663347.component";
import { App7837706096859037Component } from "./components/app-7837706096859037/app-7837706096859037.component";
import { App818298101178917Component } from "./components/app-818298101178917/app-818298101178917.component";

// @ts-ignore
import html from './app-3982529740385043.component.html?raw';
// @ts-ignore
import style from './app-3982529740385043.component.scss?inline';

/**
 * COMPONENT: 'app-3982529740385043'
 */

export const App3982529740385043Component = new Component({
  name: 'app-3982529740385043',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4554074480573389Component,
App8684786824669889Component,
App6441426328663347Component,
App7837706096859037Component,
App818298101178917Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
