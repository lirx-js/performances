import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5608499662097493Component } from "./components/app-5608499662097493/app-5608499662097493.component";
import { App6236539067693417Component } from "./components/app-6236539067693417/app-6236539067693417.component";
import { App5876124344435537Component } from "./components/app-5876124344435537/app-5876124344435537.component";
import { App423320246633867Component } from "./components/app-423320246633867/app-423320246633867.component";
import { App7123112401195175Component } from "./components/app-7123112401195175/app-7123112401195175.component";

// @ts-ignore
import html from './app-6232038963402117.component.html?raw';
// @ts-ignore
import style from './app-6232038963402117.component.scss?inline';

/**
 * COMPONENT: 'app-6232038963402117'
 */

export const App6232038963402117Component = new Component({
  name: 'app-6232038963402117',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5608499662097493Component,
App6236539067693417Component,
App5876124344435537Component,
App423320246633867Component,
App7123112401195175Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
