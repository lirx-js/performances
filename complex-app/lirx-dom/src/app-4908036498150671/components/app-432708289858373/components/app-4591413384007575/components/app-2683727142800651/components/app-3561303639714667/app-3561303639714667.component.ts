import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3433612728502827Component } from "./components/app-3433612728502827/app-3433612728502827.component";
import { App4157563182701841Component } from "./components/app-4157563182701841/app-4157563182701841.component";
import { App7813989466289703Component } from "./components/app-7813989466289703/app-7813989466289703.component";
import { App5304373995343047Component } from "./components/app-5304373995343047/app-5304373995343047.component";
import { App1010011305685953Component } from "./components/app-1010011305685953/app-1010011305685953.component";

// @ts-ignore
import html from './app-3561303639714667.component.html?raw';
// @ts-ignore
import style from './app-3561303639714667.component.scss?inline';

/**
 * COMPONENT: 'app-3561303639714667'
 */

export const App3561303639714667Component = new Component({
  name: 'app-3561303639714667',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3433612728502827Component,
App4157563182701841Component,
App7813989466289703Component,
App5304373995343047Component,
App1010011305685953Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
