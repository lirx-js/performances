import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1267944310181423Component } from "./components/app-1267944310181423/app-1267944310181423.component";
import { App4914955101413031Component } from "./components/app-4914955101413031/app-4914955101413031.component";
import { App4020960430951391Component } from "./components/app-4020960430951391/app-4020960430951391.component";
import { App4810865508212879Component } from "./components/app-4810865508212879/app-4810865508212879.component";
import { App8366544805990649Component } from "./components/app-8366544805990649/app-8366544805990649.component";

// @ts-ignore
import html from './app-2981684091094995.component.html?raw';
// @ts-ignore
import style from './app-2981684091094995.component.scss?inline';

/**
 * COMPONENT: 'app-2981684091094995'
 */

export const App2981684091094995Component = new Component({
  name: 'app-2981684091094995',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1267944310181423Component,
App4914955101413031Component,
App4020960430951391Component,
App4810865508212879Component,
App8366544805990649Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
