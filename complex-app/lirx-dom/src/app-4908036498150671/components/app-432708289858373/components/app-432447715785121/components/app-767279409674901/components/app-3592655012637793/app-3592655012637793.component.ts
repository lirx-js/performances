import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3784153092037697Component } from "./components/app-3784153092037697/app-3784153092037697.component";
import { App4899740058961715Component } from "./components/app-4899740058961715/app-4899740058961715.component";
import { App4605753688722425Component } from "./components/app-4605753688722425/app-4605753688722425.component";
import { App2244940979160403Component } from "./components/app-2244940979160403/app-2244940979160403.component";
import { App71910365367633Component } from "./components/app-71910365367633/app-71910365367633.component";

// @ts-ignore
import html from './app-3592655012637793.component.html?raw';
// @ts-ignore
import style from './app-3592655012637793.component.scss?inline';

/**
 * COMPONENT: 'app-3592655012637793'
 */

export const App3592655012637793Component = new Component({
  name: 'app-3592655012637793',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3784153092037697Component,
App4899740058961715Component,
App4605753688722425Component,
App2244940979160403Component,
App71910365367633Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
