import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App405518415352337Component } from "./components/app-405518415352337/app-405518415352337.component";
import { App3190874149015709Component } from "./components/app-3190874149015709/app-3190874149015709.component";
import { App4460974425765277Component } from "./components/app-4460974425765277/app-4460974425765277.component";
import { App2745998524590137Component } from "./components/app-2745998524590137/app-2745998524590137.component";
import { App7141083994909285Component } from "./components/app-7141083994909285/app-7141083994909285.component";

// @ts-ignore
import html from './app-3994163803723053.component.html?raw';
// @ts-ignore
import style from './app-3994163803723053.component.scss?inline';

/**
 * COMPONENT: 'app-3994163803723053'
 */

export const App3994163803723053Component = new Component({
  name: 'app-3994163803723053',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App405518415352337Component,
App3190874149015709Component,
App4460974425765277Component,
App2745998524590137Component,
App7141083994909285Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
