import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7507455327820945Component } from "./components/app-7507455327820945/app-7507455327820945.component";
import { App1595836092610987Component } from "./components/app-1595836092610987/app-1595836092610987.component";
import { App2493489161341443Component } from "./components/app-2493489161341443/app-2493489161341443.component";
import { App5898630557395161Component } from "./components/app-5898630557395161/app-5898630557395161.component";
import { App5093732905862307Component } from "./components/app-5093732905862307/app-5093732905862307.component";

// @ts-ignore
import html from './app-8633629989605621.component.html?raw';
// @ts-ignore
import style from './app-8633629989605621.component.scss?inline';

/**
 * COMPONENT: 'app-8633629989605621'
 */

export const App8633629989605621Component = new Component({
  name: 'app-8633629989605621',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7507455327820945Component,
App1595836092610987Component,
App2493489161341443Component,
App5898630557395161Component,
App5093732905862307Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
