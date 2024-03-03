import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5579122527176463Component } from "./components/app-5579122527176463/app-5579122527176463.component";
import { App3566366696824693Component } from "./components/app-3566366696824693/app-3566366696824693.component";
import { App8368444294918267Component } from "./components/app-8368444294918267/app-8368444294918267.component";
import { App8872991679759301Component } from "./components/app-8872991679759301/app-8872991679759301.component";
import { App4241369767804851Component } from "./components/app-4241369767804851/app-4241369767804851.component";

// @ts-ignore
import html from './app-1535593225118835.component.html?raw';
// @ts-ignore
import style from './app-1535593225118835.component.scss?inline';

/**
 * COMPONENT: 'app-1535593225118835'
 */

export const App1535593225118835Component = new Component({
  name: 'app-1535593225118835',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5579122527176463Component,
App3566366696824693Component,
App8368444294918267Component,
App8872991679759301Component,
App4241369767804851Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
