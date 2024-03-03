import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8973649673039861Component } from "./components/app-8973649673039861/app-8973649673039861.component";
import { App3233176917039301Component } from "./components/app-3233176917039301/app-3233176917039301.component";
import { App894981784995541Component } from "./components/app-894981784995541/app-894981784995541.component";
import { App9000784441554817Component } from "./components/app-9000784441554817/app-9000784441554817.component";
import { App8385982738578907Component } from "./components/app-8385982738578907/app-8385982738578907.component";

// @ts-ignore
import html from './app-84188776373533.component.html?raw';
// @ts-ignore
import style from './app-84188776373533.component.scss?inline';

/**
 * COMPONENT: 'app-84188776373533'
 */

export const App84188776373533Component = new Component({
  name: 'app-84188776373533',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8973649673039861Component,
App3233176917039301Component,
App894981784995541Component,
App9000784441554817Component,
App8385982738578907Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
