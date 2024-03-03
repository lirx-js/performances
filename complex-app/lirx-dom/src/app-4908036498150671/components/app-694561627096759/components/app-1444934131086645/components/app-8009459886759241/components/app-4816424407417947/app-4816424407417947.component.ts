import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7970142440762853Component } from "./components/app-7970142440762853/app-7970142440762853.component";
import { App3067914724053237Component } from "./components/app-3067914724053237/app-3067914724053237.component";
import { App2548722704651289Component } from "./components/app-2548722704651289/app-2548722704651289.component";
import { App6786321996096737Component } from "./components/app-6786321996096737/app-6786321996096737.component";
import { App1564475815228635Component } from "./components/app-1564475815228635/app-1564475815228635.component";

// @ts-ignore
import html from './app-4816424407417947.component.html?raw';
// @ts-ignore
import style from './app-4816424407417947.component.scss?inline';

/**
 * COMPONENT: 'app-4816424407417947'
 */

export const App4816424407417947Component = new Component({
  name: 'app-4816424407417947',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7970142440762853Component,
App3067914724053237Component,
App2548722704651289Component,
App6786321996096737Component,
App1564475815228635Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
