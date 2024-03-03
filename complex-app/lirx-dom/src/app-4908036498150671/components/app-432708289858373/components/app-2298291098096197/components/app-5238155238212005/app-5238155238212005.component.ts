import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8089219980927989Component } from "./components/app-8089219980927989/app-8089219980927989.component";
import { App4098280209766333Component } from "./components/app-4098280209766333/app-4098280209766333.component";
import { App2762762439072691Component } from "./components/app-2762762439072691/app-2762762439072691.component";
import { App1098063186277647Component } from "./components/app-1098063186277647/app-1098063186277647.component";
import { App7105764781299923Component } from "./components/app-7105764781299923/app-7105764781299923.component";

// @ts-ignore
import html from './app-5238155238212005.component.html?raw';
// @ts-ignore
import style from './app-5238155238212005.component.scss?inline';

/**
 * COMPONENT: 'app-5238155238212005'
 */

export const App5238155238212005Component = new Component({
  name: 'app-5238155238212005',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8089219980927989Component,
App4098280209766333Component,
App2762762439072691Component,
App1098063186277647Component,
App7105764781299923Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
