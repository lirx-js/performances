import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1888080366507549Component } from "./components/app-1888080366507549/app-1888080366507549.component";
import { App4579581875836001Component } from "./components/app-4579581875836001/app-4579581875836001.component";
import { App4753791339945585Component } from "./components/app-4753791339945585/app-4753791339945585.component";
import { App1603616404790237Component } from "./components/app-1603616404790237/app-1603616404790237.component";
import { App3038035439901855Component } from "./components/app-3038035439901855/app-3038035439901855.component";

// @ts-ignore
import html from './app-2681458143549755.component.html?raw';
// @ts-ignore
import style from './app-2681458143549755.component.scss?inline';

/**
 * COMPONENT: 'app-2681458143549755'
 */

export const App2681458143549755Component = new Component({
  name: 'app-2681458143549755',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1888080366507549Component,
App4579581875836001Component,
App4753791339945585Component,
App1603616404790237Component,
App3038035439901855Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
