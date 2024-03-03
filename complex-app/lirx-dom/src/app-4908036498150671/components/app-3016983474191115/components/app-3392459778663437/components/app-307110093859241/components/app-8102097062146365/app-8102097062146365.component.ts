import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6455948181878033Component } from "./components/app-6455948181878033/app-6455948181878033.component";
import { App8665673821332263Component } from "./components/app-8665673821332263/app-8665673821332263.component";
import { App5726550645082413Component } from "./components/app-5726550645082413/app-5726550645082413.component";
import { App6227711058142537Component } from "./components/app-6227711058142537/app-6227711058142537.component";
import { App8801928716366851Component } from "./components/app-8801928716366851/app-8801928716366851.component";

// @ts-ignore
import html from './app-8102097062146365.component.html?raw';
// @ts-ignore
import style from './app-8102097062146365.component.scss?inline';

/**
 * COMPONENT: 'app-8102097062146365'
 */

export const App8102097062146365Component = new Component({
  name: 'app-8102097062146365',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6455948181878033Component,
App8665673821332263Component,
App5726550645082413Component,
App6227711058142537Component,
App8801928716366851Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
