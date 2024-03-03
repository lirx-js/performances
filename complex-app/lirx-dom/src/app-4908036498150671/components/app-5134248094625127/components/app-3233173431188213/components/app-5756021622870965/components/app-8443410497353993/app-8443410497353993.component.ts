import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7259924835848749Component } from "./components/app-7259924835848749/app-7259924835848749.component";
import { App2475179351316379Component } from "./components/app-2475179351316379/app-2475179351316379.component";
import { App4064014000954937Component } from "./components/app-4064014000954937/app-4064014000954937.component";
import { App8433928337295773Component } from "./components/app-8433928337295773/app-8433928337295773.component";
import { App7119151321114289Component } from "./components/app-7119151321114289/app-7119151321114289.component";

// @ts-ignore
import html from './app-8443410497353993.component.html?raw';
// @ts-ignore
import style from './app-8443410497353993.component.scss?inline';

/**
 * COMPONENT: 'app-8443410497353993'
 */

export const App8443410497353993Component = new Component({
  name: 'app-8443410497353993',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7259924835848749Component,
App2475179351316379Component,
App4064014000954937Component,
App8433928337295773Component,
App7119151321114289Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
