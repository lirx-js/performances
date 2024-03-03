import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8763387952218613Component } from "./components/app-8763387952218613/app-8763387952218613.component";
import { App1471332904388421Component } from "./components/app-1471332904388421/app-1471332904388421.component";
import { App1886362409601963Component } from "./components/app-1886362409601963/app-1886362409601963.component";
import { App8214579101117379Component } from "./components/app-8214579101117379/app-8214579101117379.component";
import { App8323141090333057Component } from "./components/app-8323141090333057/app-8323141090333057.component";

// @ts-ignore
import html from './app-3261168070215377.component.html?raw';
// @ts-ignore
import style from './app-3261168070215377.component.scss?inline';

/**
 * COMPONENT: 'app-3261168070215377'
 */

export const App3261168070215377Component = new Component({
  name: 'app-3261168070215377',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8763387952218613Component,
App1471332904388421Component,
App1886362409601963Component,
App8214579101117379Component,
App8323141090333057Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
