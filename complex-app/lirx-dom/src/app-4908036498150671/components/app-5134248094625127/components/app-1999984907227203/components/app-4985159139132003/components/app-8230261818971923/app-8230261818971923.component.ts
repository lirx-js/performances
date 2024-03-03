import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2560805848750293Component } from "./components/app-2560805848750293/app-2560805848750293.component";
import { App1350119242799125Component } from "./components/app-1350119242799125/app-1350119242799125.component";
import { App4233990666999355Component } from "./components/app-4233990666999355/app-4233990666999355.component";
import { App2614215681605379Component } from "./components/app-2614215681605379/app-2614215681605379.component";
import { App3073562773581811Component } from "./components/app-3073562773581811/app-3073562773581811.component";

// @ts-ignore
import html from './app-8230261818971923.component.html?raw';
// @ts-ignore
import style from './app-8230261818971923.component.scss?inline';

/**
 * COMPONENT: 'app-8230261818971923'
 */

export const App8230261818971923Component = new Component({
  name: 'app-8230261818971923',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2560805848750293Component,
App1350119242799125Component,
App4233990666999355Component,
App2614215681605379Component,
App3073562773581811Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
