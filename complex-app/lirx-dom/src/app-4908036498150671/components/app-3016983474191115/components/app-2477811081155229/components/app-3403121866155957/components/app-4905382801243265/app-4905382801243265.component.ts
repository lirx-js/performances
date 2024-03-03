import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1310628833750827Component } from "./components/app-1310628833750827/app-1310628833750827.component";
import { App3936742066496099Component } from "./components/app-3936742066496099/app-3936742066496099.component";
import { App6495026654644821Component } from "./components/app-6495026654644821/app-6495026654644821.component";
import { App2539991713622833Component } from "./components/app-2539991713622833/app-2539991713622833.component";
import { App339693229289049Component } from "./components/app-339693229289049/app-339693229289049.component";

// @ts-ignore
import html from './app-4905382801243265.component.html?raw';
// @ts-ignore
import style from './app-4905382801243265.component.scss?inline';

/**
 * COMPONENT: 'app-4905382801243265'
 */

export const App4905382801243265Component = new Component({
  name: 'app-4905382801243265',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1310628833750827Component,
App3936742066496099Component,
App6495026654644821Component,
App2539991713622833Component,
App339693229289049Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
