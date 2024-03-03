import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8490255401489369Component } from "./components/app-8490255401489369/app-8490255401489369.component";
import { App6425485575017905Component } from "./components/app-6425485575017905/app-6425485575017905.component";
import { App1052701157662331Component } from "./components/app-1052701157662331/app-1052701157662331.component";
import { App7957415066032259Component } from "./components/app-7957415066032259/app-7957415066032259.component";
import { App1050906431268749Component } from "./components/app-1050906431268749/app-1050906431268749.component";

// @ts-ignore
import html from './app-4609752604313485.component.html?raw';
// @ts-ignore
import style from './app-4609752604313485.component.scss?inline';

/**
 * COMPONENT: 'app-4609752604313485'
 */

export const App4609752604313485Component = new Component({
  name: 'app-4609752604313485',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8490255401489369Component,
App6425485575017905Component,
App1052701157662331Component,
App7957415066032259Component,
App1050906431268749Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
