import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7491230049811327Component } from "./components/app-7491230049811327/app-7491230049811327.component";
import { App6230816546426041Component } from "./components/app-6230816546426041/app-6230816546426041.component";
import { App7044649037436217Component } from "./components/app-7044649037436217/app-7044649037436217.component";
import { App5981929330110873Component } from "./components/app-5981929330110873/app-5981929330110873.component";
import { App7665045311429165Component } from "./components/app-7665045311429165/app-7665045311429165.component";

// @ts-ignore
import html from './app-4445678172779565.component.html?raw';
// @ts-ignore
import style from './app-4445678172779565.component.scss?inline';

/**
 * COMPONENT: 'app-4445678172779565'
 */

export const App4445678172779565Component = new Component({
  name: 'app-4445678172779565',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7491230049811327Component,
App6230816546426041Component,
App7044649037436217Component,
App5981929330110873Component,
App7665045311429165Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
