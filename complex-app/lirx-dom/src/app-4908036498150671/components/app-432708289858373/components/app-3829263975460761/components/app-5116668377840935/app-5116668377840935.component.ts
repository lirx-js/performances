import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2612982048730767Component } from "./components/app-2612982048730767/app-2612982048730767.component";
import { App2842944275925349Component } from "./components/app-2842944275925349/app-2842944275925349.component";
import { App2660682635856485Component } from "./components/app-2660682635856485/app-2660682635856485.component";
import { App3238994224608533Component } from "./components/app-3238994224608533/app-3238994224608533.component";
import { App1656878075371887Component } from "./components/app-1656878075371887/app-1656878075371887.component";

// @ts-ignore
import html from './app-5116668377840935.component.html?raw';
// @ts-ignore
import style from './app-5116668377840935.component.scss?inline';

/**
 * COMPONENT: 'app-5116668377840935'
 */

export const App5116668377840935Component = new Component({
  name: 'app-5116668377840935',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2612982048730767Component,
App2842944275925349Component,
App2660682635856485Component,
App3238994224608533Component,
App1656878075371887Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
