import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2930972409361815Component } from "./components/app-2930972409361815/app-2930972409361815.component";
import { App3016072128328013Component } from "./components/app-3016072128328013/app-3016072128328013.component";
import { App6241655550434787Component } from "./components/app-6241655550434787/app-6241655550434787.component";
import { App1425530567438249Component } from "./components/app-1425530567438249/app-1425530567438249.component";
import { App368865295360585Component } from "./components/app-368865295360585/app-368865295360585.component";

// @ts-ignore
import html from './app-342030669724623.component.html?raw';
// @ts-ignore
import style from './app-342030669724623.component.scss?inline';

/**
 * COMPONENT: 'app-342030669724623'
 */

export const App342030669724623Component = new Component({
  name: 'app-342030669724623',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2930972409361815Component,
App3016072128328013Component,
App6241655550434787Component,
App1425530567438249Component,
App368865295360585Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
