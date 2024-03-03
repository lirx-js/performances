import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1149765458366195Component } from "./components/app-1149765458366195/app-1149765458366195.component";
import { App1235489184195763Component } from "./components/app-1235489184195763/app-1235489184195763.component";
import { App5404266727109503Component } from "./components/app-5404266727109503/app-5404266727109503.component";
import { App4798665167844725Component } from "./components/app-4798665167844725/app-4798665167844725.component";
import { App7458808523753729Component } from "./components/app-7458808523753729/app-7458808523753729.component";

// @ts-ignore
import html from './app-8601754520409303.component.html?raw';
// @ts-ignore
import style from './app-8601754520409303.component.scss?inline';

/**
 * COMPONENT: 'app-8601754520409303'
 */

export const App8601754520409303Component = new Component({
  name: 'app-8601754520409303',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1149765458366195Component,
App1235489184195763Component,
App5404266727109503Component,
App4798665167844725Component,
App7458808523753729Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
