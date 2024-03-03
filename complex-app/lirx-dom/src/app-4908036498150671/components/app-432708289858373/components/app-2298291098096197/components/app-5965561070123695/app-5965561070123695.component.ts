import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8784945507762159Component } from "./components/app-8784945507762159/app-8784945507762159.component";
import { App1043475380534073Component } from "./components/app-1043475380534073/app-1043475380534073.component";
import { App875186337955491Component } from "./components/app-875186337955491/app-875186337955491.component";
import { App2671608238181379Component } from "./components/app-2671608238181379/app-2671608238181379.component";
import { App4224674126727225Component } from "./components/app-4224674126727225/app-4224674126727225.component";

// @ts-ignore
import html from './app-5965561070123695.component.html?raw';
// @ts-ignore
import style from './app-5965561070123695.component.scss?inline';

/**
 * COMPONENT: 'app-5965561070123695'
 */

export const App5965561070123695Component = new Component({
  name: 'app-5965561070123695',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8784945507762159Component,
App1043475380534073Component,
App875186337955491Component,
App2671608238181379Component,
App4224674126727225Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
