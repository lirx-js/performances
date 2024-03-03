import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7791082651938047Component } from "./components/app-7791082651938047/app-7791082651938047.component";
import { App3921001729479941Component } from "./components/app-3921001729479941/app-3921001729479941.component";
import { App5420268222994547Component } from "./components/app-5420268222994547/app-5420268222994547.component";
import { App4324113546391873Component } from "./components/app-4324113546391873/app-4324113546391873.component";
import { App4646524750990329Component } from "./components/app-4646524750990329/app-4646524750990329.component";

// @ts-ignore
import html from './app-7841962540779655.component.html?raw';
// @ts-ignore
import style from './app-7841962540779655.component.scss?inline';

/**
 * COMPONENT: 'app-7841962540779655'
 */

export const App7841962540779655Component = new Component({
  name: 'app-7841962540779655',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7791082651938047Component,
App3921001729479941Component,
App5420268222994547Component,
App4324113546391873Component,
App4646524750990329Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
