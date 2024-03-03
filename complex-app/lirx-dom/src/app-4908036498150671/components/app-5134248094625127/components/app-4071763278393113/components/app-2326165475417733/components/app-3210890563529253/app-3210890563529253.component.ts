import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6466450469045953Component } from "./components/app-6466450469045953/app-6466450469045953.component";
import { App1861296926180541Component } from "./components/app-1861296926180541/app-1861296926180541.component";
import { App2102624563985647Component } from "./components/app-2102624563985647/app-2102624563985647.component";
import { App1905358327044425Component } from "./components/app-1905358327044425/app-1905358327044425.component";
import { App8642859294011393Component } from "./components/app-8642859294011393/app-8642859294011393.component";

// @ts-ignore
import html from './app-3210890563529253.component.html?raw';
// @ts-ignore
import style from './app-3210890563529253.component.scss?inline';

/**
 * COMPONENT: 'app-3210890563529253'
 */

export const App3210890563529253Component = new Component({
  name: 'app-3210890563529253',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6466450469045953Component,
App1861296926180541Component,
App2102624563985647Component,
App1905358327044425Component,
App8642859294011393Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
