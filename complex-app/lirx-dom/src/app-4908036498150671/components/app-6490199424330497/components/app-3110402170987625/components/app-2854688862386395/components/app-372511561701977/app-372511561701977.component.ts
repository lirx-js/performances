import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1958198450111583Component } from "./components/app-1958198450111583/app-1958198450111583.component";
import { App5659615433501033Component } from "./components/app-5659615433501033/app-5659615433501033.component";
import { App8830467178603177Component } from "./components/app-8830467178603177/app-8830467178603177.component";
import { App7305391031461879Component } from "./components/app-7305391031461879/app-7305391031461879.component";
import { App5161631197306375Component } from "./components/app-5161631197306375/app-5161631197306375.component";

// @ts-ignore
import html from './app-372511561701977.component.html?raw';
// @ts-ignore
import style from './app-372511561701977.component.scss?inline';

/**
 * COMPONENT: 'app-372511561701977'
 */

export const App372511561701977Component = new Component({
  name: 'app-372511561701977',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1958198450111583Component,
App5659615433501033Component,
App8830467178603177Component,
App7305391031461879Component,
App5161631197306375Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
