import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7984299874868333Component } from "./components/app-7984299874868333/app-7984299874868333.component";
import { App4497054818445293Component } from "./components/app-4497054818445293/app-4497054818445293.component";
import { App7345501431018247Component } from "./components/app-7345501431018247/app-7345501431018247.component";
import { App8358559614062523Component } from "./components/app-8358559614062523/app-8358559614062523.component";
import { App5420570478293103Component } from "./components/app-5420570478293103/app-5420570478293103.component";

// @ts-ignore
import html from './app-1927715359018549.component.html?raw';
// @ts-ignore
import style from './app-1927715359018549.component.scss?inline';

/**
 * COMPONENT: 'app-1927715359018549'
 */

export const App1927715359018549Component = new Component({
  name: 'app-1927715359018549',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7984299874868333Component,
App4497054818445293Component,
App7345501431018247Component,
App8358559614062523Component,
App5420570478293103Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
