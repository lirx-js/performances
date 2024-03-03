import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3151393369480467Component } from "./components/app-3151393369480467/app-3151393369480467.component";
import { App4681424124626655Component } from "./components/app-4681424124626655/app-4681424124626655.component";
import { App430845150659691Component } from "./components/app-430845150659691/app-430845150659691.component";
import { App4575030349216175Component } from "./components/app-4575030349216175/app-4575030349216175.component";
import { App6360786683066557Component } from "./components/app-6360786683066557/app-6360786683066557.component";

// @ts-ignore
import html from './app-1527712656815693.component.html?raw';
// @ts-ignore
import style from './app-1527712656815693.component.scss?inline';

/**
 * COMPONENT: 'app-1527712656815693'
 */

export const App1527712656815693Component = new Component({
  name: 'app-1527712656815693',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3151393369480467Component,
App4681424124626655Component,
App430845150659691Component,
App4575030349216175Component,
App6360786683066557Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
