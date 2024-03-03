import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8198572962556397Component } from "./components/app-8198572962556397/app-8198572962556397.component";
import { App691858137195841Component } from "./components/app-691858137195841/app-691858137195841.component";
import { App2161016854128431Component } from "./components/app-2161016854128431/app-2161016854128431.component";
import { App3789825746207893Component } from "./components/app-3789825746207893/app-3789825746207893.component";
import { App6923453534224467Component } from "./components/app-6923453534224467/app-6923453534224467.component";

// @ts-ignore
import html from './app-7905355446185093.component.html?raw';
// @ts-ignore
import style from './app-7905355446185093.component.scss?inline';

/**
 * COMPONENT: 'app-7905355446185093'
 */

export const App7905355446185093Component = new Component({
  name: 'app-7905355446185093',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8198572962556397Component,
App691858137195841Component,
App2161016854128431Component,
App3789825746207893Component,
App6923453534224467Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
