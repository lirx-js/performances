import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1817520196904259Component } from "./components/app-1817520196904259/app-1817520196904259.component";
import { App4760329074984777Component } from "./components/app-4760329074984777/app-4760329074984777.component";
import { App8681162123122567Component } from "./components/app-8681162123122567/app-8681162123122567.component";
import { App7491120515139379Component } from "./components/app-7491120515139379/app-7491120515139379.component";
import { App3307169376830729Component } from "./components/app-3307169376830729/app-3307169376830729.component";

// @ts-ignore
import html from './app-3201628333898991.component.html?raw';
// @ts-ignore
import style from './app-3201628333898991.component.scss?inline';

/**
 * COMPONENT: 'app-3201628333898991'
 */

export const App3201628333898991Component = new Component({
  name: 'app-3201628333898991',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1817520196904259Component,
App4760329074984777Component,
App8681162123122567Component,
App7491120515139379Component,
App3307169376830729Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
