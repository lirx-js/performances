import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5770422573180797Component } from "./components/app-5770422573180797/app-5770422573180797.component";
import { App7068807015139743Component } from "./components/app-7068807015139743/app-7068807015139743.component";
import { App5864001301954643Component } from "./components/app-5864001301954643/app-5864001301954643.component";
import { App2279266324668533Component } from "./components/app-2279266324668533/app-2279266324668533.component";
import { App6670300418560021Component } from "./components/app-6670300418560021/app-6670300418560021.component";

// @ts-ignore
import html from './app-7902058209344927.component.html?raw';
// @ts-ignore
import style from './app-7902058209344927.component.scss?inline';

/**
 * COMPONENT: 'app-7902058209344927'
 */

export const App7902058209344927Component = new Component({
  name: 'app-7902058209344927',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5770422573180797Component,
App7068807015139743Component,
App5864001301954643Component,
App2279266324668533Component,
App6670300418560021Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
