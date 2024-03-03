import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3976840934752493Component } from "./components/app-3976840934752493/app-3976840934752493.component";
import { App8828712210165039Component } from "./components/app-8828712210165039/app-8828712210165039.component";
import { App5624455179813847Component } from "./components/app-5624455179813847/app-5624455179813847.component";
import { App2787555284288077Component } from "./components/app-2787555284288077/app-2787555284288077.component";
import { App1741731516674421Component } from "./components/app-1741731516674421/app-1741731516674421.component";

// @ts-ignore
import html from './app-4208338384938169.component.html?raw';
// @ts-ignore
import style from './app-4208338384938169.component.scss?inline';

/**
 * COMPONENT: 'app-4208338384938169'
 */

export const App4208338384938169Component = new Component({
  name: 'app-4208338384938169',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3976840934752493Component,
App8828712210165039Component,
App5624455179813847Component,
App2787555284288077Component,
App1741731516674421Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
