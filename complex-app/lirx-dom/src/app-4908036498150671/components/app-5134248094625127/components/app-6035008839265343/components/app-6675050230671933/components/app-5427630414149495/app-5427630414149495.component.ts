import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7758088528654507Component } from "./components/app-7758088528654507/app-7758088528654507.component";
import { App3381972299211127Component } from "./components/app-3381972299211127/app-3381972299211127.component";
import { App7764826683347027Component } from "./components/app-7764826683347027/app-7764826683347027.component";
import { App8740521802537879Component } from "./components/app-8740521802537879/app-8740521802537879.component";
import { App3926480892524321Component } from "./components/app-3926480892524321/app-3926480892524321.component";

// @ts-ignore
import html from './app-5427630414149495.component.html?raw';
// @ts-ignore
import style from './app-5427630414149495.component.scss?inline';

/**
 * COMPONENT: 'app-5427630414149495'
 */

export const App5427630414149495Component = new Component({
  name: 'app-5427630414149495',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7758088528654507Component,
App3381972299211127Component,
App7764826683347027Component,
App8740521802537879Component,
App3926480892524321Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
