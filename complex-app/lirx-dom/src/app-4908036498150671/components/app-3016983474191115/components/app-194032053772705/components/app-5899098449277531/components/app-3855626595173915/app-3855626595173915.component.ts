import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2433380825772851Component } from "./components/app-2433380825772851/app-2433380825772851.component";
import { App2058362079360429Component } from "./components/app-2058362079360429/app-2058362079360429.component";
import { App2823764030653141Component } from "./components/app-2823764030653141/app-2823764030653141.component";
import { App5574902936304439Component } from "./components/app-5574902936304439/app-5574902936304439.component";
import { App3367897068136297Component } from "./components/app-3367897068136297/app-3367897068136297.component";

// @ts-ignore
import html from './app-3855626595173915.component.html?raw';
// @ts-ignore
import style from './app-3855626595173915.component.scss?inline';

/**
 * COMPONENT: 'app-3855626595173915'
 */

export const App3855626595173915Component = new Component({
  name: 'app-3855626595173915',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2433380825772851Component,
App2058362079360429Component,
App2823764030653141Component,
App5574902936304439Component,
App3367897068136297Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
