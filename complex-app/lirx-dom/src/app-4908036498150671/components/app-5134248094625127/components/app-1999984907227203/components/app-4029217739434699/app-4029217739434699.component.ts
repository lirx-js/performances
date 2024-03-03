import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App9001829913708595Component } from "./components/app-9001829913708595/app-9001829913708595.component";
import { App1376253620784985Component } from "./components/app-1376253620784985/app-1376253620784985.component";
import { App3070251943302239Component } from "./components/app-3070251943302239/app-3070251943302239.component";
import { App1895429725438883Component } from "./components/app-1895429725438883/app-1895429725438883.component";
import { App7433342170054259Component } from "./components/app-7433342170054259/app-7433342170054259.component";

// @ts-ignore
import html from './app-4029217739434699.component.html?raw';
// @ts-ignore
import style from './app-4029217739434699.component.scss?inline';

/**
 * COMPONENT: 'app-4029217739434699'
 */

export const App4029217739434699Component = new Component({
  name: 'app-4029217739434699',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App9001829913708595Component,
App1376253620784985Component,
App3070251943302239Component,
App1895429725438883Component,
App7433342170054259Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
