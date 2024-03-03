import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6675555625875349Component } from "./components/app-6675555625875349/app-6675555625875349.component";
import { App1724911785010085Component } from "./components/app-1724911785010085/app-1724911785010085.component";
import { App6147277311877105Component } from "./components/app-6147277311877105/app-6147277311877105.component";
import { App1843217074263195Component } from "./components/app-1843217074263195/app-1843217074263195.component";
import { App3377136833131901Component } from "./components/app-3377136833131901/app-3377136833131901.component";

// @ts-ignore
import html from './app-6910275698343059.component.html?raw';
// @ts-ignore
import style from './app-6910275698343059.component.scss?inline';

/**
 * COMPONENT: 'app-6910275698343059'
 */

export const App6910275698343059Component = new Component({
  name: 'app-6910275698343059',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6675555625875349Component,
App1724911785010085Component,
App6147277311877105Component,
App1843217074263195Component,
App3377136833131901Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
