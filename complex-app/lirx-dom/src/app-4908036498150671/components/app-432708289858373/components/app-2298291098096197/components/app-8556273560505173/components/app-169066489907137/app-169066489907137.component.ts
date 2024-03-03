import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7622867729615427Component } from "./components/app-7622867729615427/app-7622867729615427.component";
import { App5050368643360629Component } from "./components/app-5050368643360629/app-5050368643360629.component";
import { App2987420353128353Component } from "./components/app-2987420353128353/app-2987420353128353.component";
import { App8743896435233359Component } from "./components/app-8743896435233359/app-8743896435233359.component";
import { App8030758070702261Component } from "./components/app-8030758070702261/app-8030758070702261.component";

// @ts-ignore
import html from './app-169066489907137.component.html?raw';
// @ts-ignore
import style from './app-169066489907137.component.scss?inline';

/**
 * COMPONENT: 'app-169066489907137'
 */

export const App169066489907137Component = new Component({
  name: 'app-169066489907137',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7622867729615427Component,
App5050368643360629Component,
App2987420353128353Component,
App8743896435233359Component,
App8030758070702261Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
