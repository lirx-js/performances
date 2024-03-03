import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6277320989946383Component } from "./components/app-6277320989946383/app-6277320989946383.component";
import { App7717077717797783Component } from "./components/app-7717077717797783/app-7717077717797783.component";
import { App4837369992723419Component } from "./components/app-4837369992723419/app-4837369992723419.component";
import { App1771809705605843Component } from "./components/app-1771809705605843/app-1771809705605843.component";
import { App7203166389507099Component } from "./components/app-7203166389507099/app-7203166389507099.component";

// @ts-ignore
import html from './app-7651466976839119.component.html?raw';
// @ts-ignore
import style from './app-7651466976839119.component.scss?inline';

/**
 * COMPONENT: 'app-7651466976839119'
 */

export const App7651466976839119Component = new Component({
  name: 'app-7651466976839119',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6277320989946383Component,
App7717077717797783Component,
App4837369992723419Component,
App1771809705605843Component,
App7203166389507099Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
