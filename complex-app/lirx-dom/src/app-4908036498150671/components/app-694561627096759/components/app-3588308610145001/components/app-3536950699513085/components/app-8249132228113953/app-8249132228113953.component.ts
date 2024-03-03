import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8248486248972729Component } from "./components/app-8248486248972729/app-8248486248972729.component";
import { App3804706896758153Component } from "./components/app-3804706896758153/app-3804706896758153.component";
import { App2009468897620765Component } from "./components/app-2009468897620765/app-2009468897620765.component";
import { App7924906905883541Component } from "./components/app-7924906905883541/app-7924906905883541.component";
import { App4612802774751521Component } from "./components/app-4612802774751521/app-4612802774751521.component";

// @ts-ignore
import html from './app-8249132228113953.component.html?raw';
// @ts-ignore
import style from './app-8249132228113953.component.scss?inline';

/**
 * COMPONENT: 'app-8249132228113953'
 */

export const App8249132228113953Component = new Component({
  name: 'app-8249132228113953',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8248486248972729Component,
App3804706896758153Component,
App2009468897620765Component,
App7924906905883541Component,
App4612802774751521Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
