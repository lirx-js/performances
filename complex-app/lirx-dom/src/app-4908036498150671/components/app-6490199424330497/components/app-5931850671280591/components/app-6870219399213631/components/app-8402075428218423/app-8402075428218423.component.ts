import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App979855140573009Component } from "./components/app-979855140573009/app-979855140573009.component";
import { App6666862215298269Component } from "./components/app-6666862215298269/app-6666862215298269.component";
import { App7863935303210459Component } from "./components/app-7863935303210459/app-7863935303210459.component";
import { App4186878085527231Component } from "./components/app-4186878085527231/app-4186878085527231.component";
import { App4183205668628719Component } from "./components/app-4183205668628719/app-4183205668628719.component";

// @ts-ignore
import html from './app-8402075428218423.component.html?raw';
// @ts-ignore
import style from './app-8402075428218423.component.scss?inline';

/**
 * COMPONENT: 'app-8402075428218423'
 */

export const App8402075428218423Component = new Component({
  name: 'app-8402075428218423',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App979855140573009Component,
App6666862215298269Component,
App7863935303210459Component,
App4186878085527231Component,
App4183205668628719Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
