import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8186928712353139Component } from "./components/app-8186928712353139/app-8186928712353139.component";
import { App3862950558996527Component } from "./components/app-3862950558996527/app-3862950558996527.component";
import { App1174704308196283Component } from "./components/app-1174704308196283/app-1174704308196283.component";
import { App524618721928161Component } from "./components/app-524618721928161/app-524618721928161.component";
import { App4338666796316711Component } from "./components/app-4338666796316711/app-4338666796316711.component";

// @ts-ignore
import html from './app-4857541839998251.component.html?raw';
// @ts-ignore
import style from './app-4857541839998251.component.scss?inline';

/**
 * COMPONENT: 'app-4857541839998251'
 */

export const App4857541839998251Component = new Component({
  name: 'app-4857541839998251',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8186928712353139Component,
App3862950558996527Component,
App1174704308196283Component,
App524618721928161Component,
App4338666796316711Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
