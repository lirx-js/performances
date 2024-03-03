import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5158127831957521Component } from "./components/app-5158127831957521/app-5158127831957521.component";
import { App3178560273720069Component } from "./components/app-3178560273720069/app-3178560273720069.component";
import { App8520062163660297Component } from "./components/app-8520062163660297/app-8520062163660297.component";
import { App5450894605232379Component } from "./components/app-5450894605232379/app-5450894605232379.component";
import { App4395788516528157Component } from "./components/app-4395788516528157/app-4395788516528157.component";

// @ts-ignore
import html from './app-1996932822613591.component.html?raw';
// @ts-ignore
import style from './app-1996932822613591.component.scss?inline';

/**
 * COMPONENT: 'app-1996932822613591'
 */

export const App1996932822613591Component = new Component({
  name: 'app-1996932822613591',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5158127831957521Component,
App3178560273720069Component,
App8520062163660297Component,
App5450894605232379Component,
App4395788516528157Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
