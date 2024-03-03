import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4591215822088587Component } from "./components/app-4591215822088587/app-4591215822088587.component";
import { App8238832418966635Component } from "./components/app-8238832418966635/app-8238832418966635.component";
import { App788232254833163Component } from "./components/app-788232254833163/app-788232254833163.component";
import { App8346372438653295Component } from "./components/app-8346372438653295/app-8346372438653295.component";
import { App6344220004594035Component } from "./components/app-6344220004594035/app-6344220004594035.component";

// @ts-ignore
import html from './app-8676943781828347.component.html?raw';
// @ts-ignore
import style from './app-8676943781828347.component.scss?inline';

/**
 * COMPONENT: 'app-8676943781828347'
 */

export const App8676943781828347Component = new Component({
  name: 'app-8676943781828347',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4591215822088587Component,
App8238832418966635Component,
App788232254833163Component,
App8346372438653295Component,
App6344220004594035Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
