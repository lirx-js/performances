import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2996583057983533Component } from "./components/app-2996583057983533/app-2996583057983533.component";
import { App4174872626097727Component } from "./components/app-4174872626097727/app-4174872626097727.component";
import { App6268006089467783Component } from "./components/app-6268006089467783/app-6268006089467783.component";
import { App8028927174898507Component } from "./components/app-8028927174898507/app-8028927174898507.component";
import { App7304049944694999Component } from "./components/app-7304049944694999/app-7304049944694999.component";

// @ts-ignore
import html from './app-2144424087985593.component.html?raw';
// @ts-ignore
import style from './app-2144424087985593.component.scss?inline';

/**
 * COMPONENT: 'app-2144424087985593'
 */

export const App2144424087985593Component = new Component({
  name: 'app-2144424087985593',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2996583057983533Component,
App4174872626097727Component,
App6268006089467783Component,
App8028927174898507Component,
App7304049944694999Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
