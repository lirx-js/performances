import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3241226870995283Component } from "./components/app-3241226870995283/app-3241226870995283.component";
import { App4659534535589599Component } from "./components/app-4659534535589599/app-4659534535589599.component";
import { App2371446441893105Component } from "./components/app-2371446441893105/app-2371446441893105.component";
import { App1360931127400959Component } from "./components/app-1360931127400959/app-1360931127400959.component";
import { App5634269925509091Component } from "./components/app-5634269925509091/app-5634269925509091.component";

// @ts-ignore
import html from './app-3775510790427029.component.html?raw';
// @ts-ignore
import style from './app-3775510790427029.component.scss?inline';

/**
 * COMPONENT: 'app-3775510790427029'
 */

export const App3775510790427029Component = new Component({
  name: 'app-3775510790427029',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3241226870995283Component,
App4659534535589599Component,
App2371446441893105Component,
App1360931127400959Component,
App5634269925509091Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
