import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4124130435803069Component } from "./components/app-4124130435803069/app-4124130435803069.component";
import { App3164106405081923Component } from "./components/app-3164106405081923/app-3164106405081923.component";
import { App408569027486599Component } from "./components/app-408569027486599/app-408569027486599.component";
import { App5662318874182153Component } from "./components/app-5662318874182153/app-5662318874182153.component";
import { App91513856903595Component } from "./components/app-91513856903595/app-91513856903595.component";

// @ts-ignore
import html from './app-4575579030372919.component.html?raw';
// @ts-ignore
import style from './app-4575579030372919.component.scss?inline';

/**
 * COMPONENT: 'app-4575579030372919'
 */

export const App4575579030372919Component = new Component({
  name: 'app-4575579030372919',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4124130435803069Component,
App3164106405081923Component,
App408569027486599Component,
App5662318874182153Component,
App91513856903595Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
