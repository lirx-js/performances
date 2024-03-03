import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3021219125294263Component } from "./components/app-3021219125294263/app-3021219125294263.component";
import { App6265886530722137Component } from "./components/app-6265886530722137/app-6265886530722137.component";
import { App8993753961698301Component } from "./components/app-8993753961698301/app-8993753961698301.component";
import { App4628264064701723Component } from "./components/app-4628264064701723/app-4628264064701723.component";
import { App4325068603524833Component } from "./components/app-4325068603524833/app-4325068603524833.component";

// @ts-ignore
import html from './app-4107692646107973.component.html?raw';
// @ts-ignore
import style from './app-4107692646107973.component.scss?inline';

/**
 * COMPONENT: 'app-4107692646107973'
 */

export const App4107692646107973Component = new Component({
  name: 'app-4107692646107973',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3021219125294263Component,
App6265886530722137Component,
App8993753961698301Component,
App4628264064701723Component,
App4325068603524833Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
