import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4893430455741439Component } from "./components/app-4893430455741439/app-4893430455741439.component";
import { App8068049260397935Component } from "./components/app-8068049260397935/app-8068049260397935.component";
import { App1068205007285095Component } from "./components/app-1068205007285095/app-1068205007285095.component";
import { App3878886028130049Component } from "./components/app-3878886028130049/app-3878886028130049.component";
import { App3510622696270183Component } from "./components/app-3510622696270183/app-3510622696270183.component";

// @ts-ignore
import html from './app-231446902807413.component.html?raw';
// @ts-ignore
import style from './app-231446902807413.component.scss?inline';

/**
 * COMPONENT: 'app-231446902807413'
 */

export const App231446902807413Component = new Component({
  name: 'app-231446902807413',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4893430455741439Component,
App8068049260397935Component,
App1068205007285095Component,
App3878886028130049Component,
App3510622696270183Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
