import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3451592822219485Component } from "./components/app-3451592822219485/app-3451592822219485.component";
import { App1177994515482913Component } from "./components/app-1177994515482913/app-1177994515482913.component";
import { App7744954132553335Component } from "./components/app-7744954132553335/app-7744954132553335.component";
import { App8603333857672985Component } from "./components/app-8603333857672985/app-8603333857672985.component";
import { App367701960326981Component } from "./components/app-367701960326981/app-367701960326981.component";

// @ts-ignore
import html from './app-5697793824719461.component.html?raw';
// @ts-ignore
import style from './app-5697793824719461.component.scss?inline';

/**
 * COMPONENT: 'app-5697793824719461'
 */

export const App5697793824719461Component = new Component({
  name: 'app-5697793824719461',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3451592822219485Component,
App1177994515482913Component,
App7744954132553335Component,
App8603333857672985Component,
App367701960326981Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
