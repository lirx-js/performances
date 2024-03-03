import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1130837289392887Component } from "./components/app-1130837289392887/app-1130837289392887.component";
import { App7905355446185093Component } from "./components/app-7905355446185093/app-7905355446185093.component";
import { App5090027397583961Component } from "./components/app-5090027397583961/app-5090027397583961.component";
import { App3843512373389009Component } from "./components/app-3843512373389009/app-3843512373389009.component";
import { App4744349885943903Component } from "./components/app-4744349885943903/app-4744349885943903.component";

// @ts-ignore
import html from './app-5165169173920711.component.html?raw';
// @ts-ignore
import style from './app-5165169173920711.component.scss?inline';

/**
 * COMPONENT: 'app-5165169173920711'
 */

export const App5165169173920711Component = new Component({
  name: 'app-5165169173920711',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1130837289392887Component,
App7905355446185093Component,
App5090027397583961Component,
App3843512373389009Component,
App4744349885943903Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
