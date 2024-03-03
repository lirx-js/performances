import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8240163695008673Component } from "./components/app-8240163695008673/app-8240163695008673.component";
import { App4478937927081129Component } from "./components/app-4478937927081129/app-4478937927081129.component";
import { App3024973117626225Component } from "./components/app-3024973117626225/app-3024973117626225.component";
import { App220757212580771Component } from "./components/app-220757212580771/app-220757212580771.component";
import { App6143035876965757Component } from "./components/app-6143035876965757/app-6143035876965757.component";

// @ts-ignore
import html from './app-5243954220553593.component.html?raw';
// @ts-ignore
import style from './app-5243954220553593.component.scss?inline';

/**
 * COMPONENT: 'app-5243954220553593'
 */

export const App5243954220553593Component = new Component({
  name: 'app-5243954220553593',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8240163695008673Component,
App4478937927081129Component,
App3024973117626225Component,
App220757212580771Component,
App6143035876965757Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
