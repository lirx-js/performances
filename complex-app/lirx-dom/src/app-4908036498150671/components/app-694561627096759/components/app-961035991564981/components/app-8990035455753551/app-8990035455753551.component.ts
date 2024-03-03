import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3201628333898991Component } from "./components/app-3201628333898991/app-3201628333898991.component";
import { App4139471212398131Component } from "./components/app-4139471212398131/app-4139471212398131.component";
import { App8001586514768719Component } from "./components/app-8001586514768719/app-8001586514768719.component";
import { App8919168801603047Component } from "./components/app-8919168801603047/app-8919168801603047.component";
import { App1947535402567331Component } from "./components/app-1947535402567331/app-1947535402567331.component";

// @ts-ignore
import html from './app-8990035455753551.component.html?raw';
// @ts-ignore
import style from './app-8990035455753551.component.scss?inline';

/**
 * COMPONENT: 'app-8990035455753551'
 */

export const App8990035455753551Component = new Component({
  name: 'app-8990035455753551',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3201628333898991Component,
App4139471212398131Component,
App8001586514768719Component,
App8919168801603047Component,
App1947535402567331Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
