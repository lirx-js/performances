import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4806043454684505Component } from "./components/app-4806043454684505/app-4806043454684505.component";
import { App2775466779101143Component } from "./components/app-2775466779101143/app-2775466779101143.component";
import { App7680082396007113Component } from "./components/app-7680082396007113/app-7680082396007113.component";
import { App8463267836722377Component } from "./components/app-8463267836722377/app-8463267836722377.component";
import { App5952308755582889Component } from "./components/app-5952308755582889/app-5952308755582889.component";

// @ts-ignore
import html from './app-973606217278361.component.html?raw';
// @ts-ignore
import style from './app-973606217278361.component.scss?inline';

/**
 * COMPONENT: 'app-973606217278361'
 */

export const App973606217278361Component = new Component({
  name: 'app-973606217278361',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4806043454684505Component,
App2775466779101143Component,
App7680082396007113Component,
App8463267836722377Component,
App5952308755582889Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
