import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6232038963402117Component } from "./components/app-6232038963402117/app-6232038963402117.component";
import { App8060181663163449Component } from "./components/app-8060181663163449/app-8060181663163449.component";
import { App6326101858437167Component } from "./components/app-6326101858437167/app-6326101858437167.component";
import { App6674675971678795Component } from "./components/app-6674675971678795/app-6674675971678795.component";
import { App3886871257671069Component } from "./components/app-3886871257671069/app-3886871257671069.component";

// @ts-ignore
import html from './app-4154424951006987.component.html?raw';
// @ts-ignore
import style from './app-4154424951006987.component.scss?inline';

/**
 * COMPONENT: 'app-4154424951006987'
 */

export const App4154424951006987Component = new Component({
  name: 'app-4154424951006987',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6232038963402117Component,
App8060181663163449Component,
App6326101858437167Component,
App6674675971678795Component,
App3886871257671069Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
