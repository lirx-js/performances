import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3717227922552999Component } from "./components/app-3717227922552999/app-3717227922552999.component";
import { App3273194981413871Component } from "./components/app-3273194981413871/app-3273194981413871.component";
import { App4538649464518359Component } from "./components/app-4538649464518359/app-4538649464518359.component";
import { App7720170456144477Component } from "./components/app-7720170456144477/app-7720170456144477.component";
import { App959930831419397Component } from "./components/app-959930831419397/app-959930831419397.component";

// @ts-ignore
import html from './app-2962989142784023.component.html?raw';
// @ts-ignore
import style from './app-2962989142784023.component.scss?inline';

/**
 * COMPONENT: 'app-2962989142784023'
 */

export const App2962989142784023Component = new Component({
  name: 'app-2962989142784023',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3717227922552999Component,
App3273194981413871Component,
App4538649464518359Component,
App7720170456144477Component,
App959930831419397Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
