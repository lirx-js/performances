import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4517371472965011Component } from "./components/app-4517371472965011/app-4517371472965011.component";
import { App1733819020474151Component } from "./components/app-1733819020474151/app-1733819020474151.component";
import { App7092615009645435Component } from "./components/app-7092615009645435/app-7092615009645435.component";
import { App3267465778023195Component } from "./components/app-3267465778023195/app-3267465778023195.component";
import { App5010606671804237Component } from "./components/app-5010606671804237/app-5010606671804237.component";

// @ts-ignore
import html from './app-4306325396400163.component.html?raw';
// @ts-ignore
import style from './app-4306325396400163.component.scss?inline';

/**
 * COMPONENT: 'app-4306325396400163'
 */

export const App4306325396400163Component = new Component({
  name: 'app-4306325396400163',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4517371472965011Component,
App1733819020474151Component,
App7092615009645435Component,
App3267465778023195Component,
App5010606671804237Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
