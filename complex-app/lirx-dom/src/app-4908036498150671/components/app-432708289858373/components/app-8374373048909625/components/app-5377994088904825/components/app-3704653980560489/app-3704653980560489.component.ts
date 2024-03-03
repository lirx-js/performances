import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8235169335446509Component } from "./components/app-8235169335446509/app-8235169335446509.component";
import { App1583131051078859Component } from "./components/app-1583131051078859/app-1583131051078859.component";
import { App3059797582788813Component } from "./components/app-3059797582788813/app-3059797582788813.component";
import { App2257223527685445Component } from "./components/app-2257223527685445/app-2257223527685445.component";
import { App8055432296324337Component } from "./components/app-8055432296324337/app-8055432296324337.component";

// @ts-ignore
import html from './app-3704653980560489.component.html?raw';
// @ts-ignore
import style from './app-3704653980560489.component.scss?inline';

/**
 * COMPONENT: 'app-3704653980560489'
 */

export const App3704653980560489Component = new Component({
  name: 'app-3704653980560489',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8235169335446509Component,
App1583131051078859Component,
App3059797582788813Component,
App2257223527685445Component,
App8055432296324337Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
