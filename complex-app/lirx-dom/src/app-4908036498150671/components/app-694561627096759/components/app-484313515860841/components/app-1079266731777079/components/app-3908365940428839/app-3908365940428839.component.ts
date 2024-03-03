import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4310268594577311Component } from "./components/app-4310268594577311/app-4310268594577311.component";
import { App4240536939040247Component } from "./components/app-4240536939040247/app-4240536939040247.component";
import { App7969883990002411Component } from "./components/app-7969883990002411/app-7969883990002411.component";
import { App3200250734801979Component } from "./components/app-3200250734801979/app-3200250734801979.component";
import { App7810317923053351Component } from "./components/app-7810317923053351/app-7810317923053351.component";

// @ts-ignore
import html from './app-3908365940428839.component.html?raw';
// @ts-ignore
import style from './app-3908365940428839.component.scss?inline';

/**
 * COMPONENT: 'app-3908365940428839'
 */

export const App3908365940428839Component = new Component({
  name: 'app-3908365940428839',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4310268594577311Component,
App4240536939040247Component,
App7969883990002411Component,
App3200250734801979Component,
App7810317923053351Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
