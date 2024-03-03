import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1181148416047531Component } from "./components/app-1181148416047531/app-1181148416047531.component";
import { App3099917269439209Component } from "./components/app-3099917269439209/app-3099917269439209.component";
import { App3193710242441Component } from "./components/app-3193710242441/app-3193710242441.component";
import { App4046569998640017Component } from "./components/app-4046569998640017/app-4046569998640017.component";
import { App2127525565276737Component } from "./components/app-2127525565276737/app-2127525565276737.component";

// @ts-ignore
import html from './app-3751352244114741.component.html?raw';
// @ts-ignore
import style from './app-3751352244114741.component.scss?inline';

/**
 * COMPONENT: 'app-3751352244114741'
 */

export const App3751352244114741Component = new Component({
  name: 'app-3751352244114741',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1181148416047531Component,
App3099917269439209Component,
App3193710242441Component,
App4046569998640017Component,
App2127525565276737Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
