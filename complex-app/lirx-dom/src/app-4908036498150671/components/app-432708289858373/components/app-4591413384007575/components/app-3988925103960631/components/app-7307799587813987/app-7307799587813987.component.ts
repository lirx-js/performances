import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1707726797107877Component } from "./components/app-1707726797107877/app-1707726797107877.component";
import { App5718100807757011Component } from "./components/app-5718100807757011/app-5718100807757011.component";
import { App457871024435943Component } from "./components/app-457871024435943/app-457871024435943.component";
import { App4253844961251833Component } from "./components/app-4253844961251833/app-4253844961251833.component";
import { App2867736931271307Component } from "./components/app-2867736931271307/app-2867736931271307.component";

// @ts-ignore
import html from './app-7307799587813987.component.html?raw';
// @ts-ignore
import style from './app-7307799587813987.component.scss?inline';

/**
 * COMPONENT: 'app-7307799587813987'
 */

export const App7307799587813987Component = new Component({
  name: 'app-7307799587813987',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1707726797107877Component,
App5718100807757011Component,
App457871024435943Component,
App4253844961251833Component,
App2867736931271307Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
