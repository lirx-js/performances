import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5582950992477703Component } from "./components/app-5582950992477703/app-5582950992477703.component";
import { App7830307842239327Component } from "./components/app-7830307842239327/app-7830307842239327.component";
import { App2337158003369749Component } from "./components/app-2337158003369749/app-2337158003369749.component";
import { App6943185451219981Component } from "./components/app-6943185451219981/app-6943185451219981.component";
import { App4119544667547709Component } from "./components/app-4119544667547709/app-4119544667547709.component";

// @ts-ignore
import html from './app-1884195866683749.component.html?raw';
// @ts-ignore
import style from './app-1884195866683749.component.scss?inline';

/**
 * COMPONENT: 'app-1884195866683749'
 */

export const App1884195866683749Component = new Component({
  name: 'app-1884195866683749',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5582950992477703Component,
App7830307842239327Component,
App2337158003369749Component,
App6943185451219981Component,
App4119544667547709Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
