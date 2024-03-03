import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2638841918252397Component } from "./components/app-2638841918252397/app-2638841918252397.component";
import { App2873855460155351Component } from "./components/app-2873855460155351/app-2873855460155351.component";
import { App8959077250232733Component } from "./components/app-8959077250232733/app-8959077250232733.component";
import { App3680531185482051Component } from "./components/app-3680531185482051/app-3680531185482051.component";
import { App6375987545860031Component } from "./components/app-6375987545860031/app-6375987545860031.component";

// @ts-ignore
import html from './app-3868697687954123.component.html?raw';
// @ts-ignore
import style from './app-3868697687954123.component.scss?inline';

/**
 * COMPONENT: 'app-3868697687954123'
 */

export const App3868697687954123Component = new Component({
  name: 'app-3868697687954123',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2638841918252397Component,
App2873855460155351Component,
App8959077250232733Component,
App3680531185482051Component,
App6375987545860031Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
