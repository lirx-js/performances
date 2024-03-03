import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5973608132779891Component } from "./components/app-5973608132779891/app-5973608132779891.component";
import { App5298315752561121Component } from "./components/app-5298315752561121/app-5298315752561121.component";
import { App7113120780570011Component } from "./components/app-7113120780570011/app-7113120780570011.component";
import { App7862555589658663Component } from "./components/app-7862555589658663/app-7862555589658663.component";
import { App1895445439749643Component } from "./components/app-1895445439749643/app-1895445439749643.component";

// @ts-ignore
import html from './app-1619966269710841.component.html?raw';
// @ts-ignore
import style from './app-1619966269710841.component.scss?inline';

/**
 * COMPONENT: 'app-1619966269710841'
 */

export const App1619966269710841Component = new Component({
  name: 'app-1619966269710841',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5973608132779891Component,
App5298315752561121Component,
App7113120780570011Component,
App7862555589658663Component,
App1895445439749643Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
