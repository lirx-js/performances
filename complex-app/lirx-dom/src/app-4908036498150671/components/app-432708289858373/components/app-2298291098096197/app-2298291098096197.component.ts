import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5965561070123695Component } from "./components/app-5965561070123695/app-5965561070123695.component";
import { App5238155238212005Component } from "./components/app-5238155238212005/app-5238155238212005.component";
import { App8556273560505173Component } from "./components/app-8556273560505173/app-8556273560505173.component";
import { App7246684324370075Component } from "./components/app-7246684324370075/app-7246684324370075.component";
import { App4395595518142561Component } from "./components/app-4395595518142561/app-4395595518142561.component";

// @ts-ignore
import html from './app-2298291098096197.component.html?raw';
// @ts-ignore
import style from './app-2298291098096197.component.scss?inline';

/**
 * COMPONENT: 'app-2298291098096197'
 */

export const App2298291098096197Component = new Component({
  name: 'app-2298291098096197',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5965561070123695Component,
App5238155238212005Component,
App8556273560505173Component,
App7246684324370075Component,
App4395595518142561Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
