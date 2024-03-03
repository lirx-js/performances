import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App881522581679985Component } from "./components/app-881522581679985/app-881522581679985.component";
import { App4877242907552271Component } from "./components/app-4877242907552271/app-4877242907552271.component";
import { App1513069434146401Component } from "./components/app-1513069434146401/app-1513069434146401.component";
import { App8898091371362933Component } from "./components/app-8898091371362933/app-8898091371362933.component";
import { App2177082322961779Component } from "./components/app-2177082322961779/app-2177082322961779.component";

// @ts-ignore
import html from './app-8739012848653149.component.html?raw';
// @ts-ignore
import style from './app-8739012848653149.component.scss?inline';

/**
 * COMPONENT: 'app-8739012848653149'
 */

export const App8739012848653149Component = new Component({
  name: 'app-8739012848653149',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App881522581679985Component,
App4877242907552271Component,
App1513069434146401Component,
App8898091371362933Component,
App2177082322961779Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
