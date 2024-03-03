import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2002444219750071Component } from "./components/app-2002444219750071/app-2002444219750071.component";
import { App6881554700538061Component } from "./components/app-6881554700538061/app-6881554700538061.component";
import { App7744814042363437Component } from "./components/app-7744814042363437/app-7744814042363437.component";
import { App7804976446827791Component } from "./components/app-7804976446827791/app-7804976446827791.component";
import { App1557751543308239Component } from "./components/app-1557751543308239/app-1557751543308239.component";

// @ts-ignore
import html from './app-6994324908703729.component.html?raw';
// @ts-ignore
import style from './app-6994324908703729.component.scss?inline';

/**
 * COMPONENT: 'app-6994324908703729'
 */

export const App6994324908703729Component = new Component({
  name: 'app-6994324908703729',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2002444219750071Component,
App6881554700538061Component,
App7744814042363437Component,
App7804976446827791Component,
App1557751543308239Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
