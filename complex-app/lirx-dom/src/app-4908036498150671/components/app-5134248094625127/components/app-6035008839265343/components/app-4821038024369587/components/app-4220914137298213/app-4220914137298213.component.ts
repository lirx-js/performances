import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2030007661164441Component } from "./components/app-2030007661164441/app-2030007661164441.component";
import { App8147636350958761Component } from "./components/app-8147636350958761/app-8147636350958761.component";
import { App2042098992442517Component } from "./components/app-2042098992442517/app-2042098992442517.component";
import { App136252327277687Component } from "./components/app-136252327277687/app-136252327277687.component";
import { App5723382802783209Component } from "./components/app-5723382802783209/app-5723382802783209.component";

// @ts-ignore
import html from './app-4220914137298213.component.html?raw';
// @ts-ignore
import style from './app-4220914137298213.component.scss?inline';

/**
 * COMPONENT: 'app-4220914137298213'
 */

export const App4220914137298213Component = new Component({
  name: 'app-4220914137298213',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2030007661164441Component,
App8147636350958761Component,
App2042098992442517Component,
App136252327277687Component,
App5723382802783209Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
