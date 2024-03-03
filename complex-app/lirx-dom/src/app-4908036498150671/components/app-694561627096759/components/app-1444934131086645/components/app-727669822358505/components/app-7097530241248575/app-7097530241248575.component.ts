import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3154059084198041Component } from "./components/app-3154059084198041/app-3154059084198041.component";
import { App1312215274984441Component } from "./components/app-1312215274984441/app-1312215274984441.component";
import { App4114733322433397Component } from "./components/app-4114733322433397/app-4114733322433397.component";
import { App8486640228195901Component } from "./components/app-8486640228195901/app-8486640228195901.component";
import { App7949687458744015Component } from "./components/app-7949687458744015/app-7949687458744015.component";

// @ts-ignore
import html from './app-7097530241248575.component.html?raw';
// @ts-ignore
import style from './app-7097530241248575.component.scss?inline';

/**
 * COMPONENT: 'app-7097530241248575'
 */

export const App7097530241248575Component = new Component({
  name: 'app-7097530241248575',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3154059084198041Component,
App1312215274984441Component,
App4114733322433397Component,
App8486640228195901Component,
App7949687458744015Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
