import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7526794573460225Component } from "./components/app-7526794573460225/app-7526794573460225.component";
import { App1590696253353549Component } from "./components/app-1590696253353549/app-1590696253353549.component";
import { App7745877036755319Component } from "./components/app-7745877036755319/app-7745877036755319.component";
import { App6613612147431345Component } from "./components/app-6613612147431345/app-6613612147431345.component";
import { App131179459718643Component } from "./components/app-131179459718643/app-131179459718643.component";

// @ts-ignore
import html from './app-6063935540760865.component.html?raw';
// @ts-ignore
import style from './app-6063935540760865.component.scss?inline';

/**
 * COMPONENT: 'app-6063935540760865'
 */

export const App6063935540760865Component = new Component({
  name: 'app-6063935540760865',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7526794573460225Component,
App1590696253353549Component,
App7745877036755319Component,
App6613612147431345Component,
App131179459718643Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
