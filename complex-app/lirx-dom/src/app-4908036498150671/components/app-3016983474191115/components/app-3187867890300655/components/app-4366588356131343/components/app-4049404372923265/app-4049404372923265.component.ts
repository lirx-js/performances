import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6508198564680963Component } from "./components/app-6508198564680963/app-6508198564680963.component";
import { App1381645800874307Component } from "./components/app-1381645800874307/app-1381645800874307.component";
import { App6985601472382255Component } from "./components/app-6985601472382255/app-6985601472382255.component";
import { App3706511178434601Component } from "./components/app-3706511178434601/app-3706511178434601.component";
import { App518300150430531Component } from "./components/app-518300150430531/app-518300150430531.component";

// @ts-ignore
import html from './app-4049404372923265.component.html?raw';
// @ts-ignore
import style from './app-4049404372923265.component.scss?inline';

/**
 * COMPONENT: 'app-4049404372923265'
 */

export const App4049404372923265Component = new Component({
  name: 'app-4049404372923265',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6508198564680963Component,
App1381645800874307Component,
App6985601472382255Component,
App3706511178434601Component,
App518300150430531Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
