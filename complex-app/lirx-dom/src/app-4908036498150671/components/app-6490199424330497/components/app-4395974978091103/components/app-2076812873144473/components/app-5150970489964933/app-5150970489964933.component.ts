import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6644242234081653Component } from "./components/app-6644242234081653/app-6644242234081653.component";
import { App6174084751875187Component } from "./components/app-6174084751875187/app-6174084751875187.component";
import { App2480456716302575Component } from "./components/app-2480456716302575/app-2480456716302575.component";
import { App1985141205080741Component } from "./components/app-1985141205080741/app-1985141205080741.component";
import { App5779026514472173Component } from "./components/app-5779026514472173/app-5779026514472173.component";

// @ts-ignore
import html from './app-5150970489964933.component.html?raw';
// @ts-ignore
import style from './app-5150970489964933.component.scss?inline';

/**
 * COMPONENT: 'app-5150970489964933'
 */

export const App5150970489964933Component = new Component({
  name: 'app-5150970489964933',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6644242234081653Component,
App6174084751875187Component,
App2480456716302575Component,
App1985141205080741Component,
App5779026514472173Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
