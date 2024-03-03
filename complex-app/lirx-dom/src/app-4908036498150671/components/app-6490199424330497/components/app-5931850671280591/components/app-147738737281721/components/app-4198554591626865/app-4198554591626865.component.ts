import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2397656879258801Component } from "./components/app-2397656879258801/app-2397656879258801.component";
import { App3493858521326439Component } from "./components/app-3493858521326439/app-3493858521326439.component";
import { App2411213312751885Component } from "./components/app-2411213312751885/app-2411213312751885.component";
import { App4026503208541261Component } from "./components/app-4026503208541261/app-4026503208541261.component";
import { App8232156161892523Component } from "./components/app-8232156161892523/app-8232156161892523.component";

// @ts-ignore
import html from './app-4198554591626865.component.html?raw';
// @ts-ignore
import style from './app-4198554591626865.component.scss?inline';

/**
 * COMPONENT: 'app-4198554591626865'
 */

export const App4198554591626865Component = new Component({
  name: 'app-4198554591626865',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2397656879258801Component,
App3493858521326439Component,
App2411213312751885Component,
App4026503208541261Component,
App8232156161892523Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
