import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2787211244039609Component } from "./components/app-2787211244039609/app-2787211244039609.component";
import { App6833572343717011Component } from "./components/app-6833572343717011/app-6833572343717011.component";
import { App1691629848296899Component } from "./components/app-1691629848296899/app-1691629848296899.component";
import { App1637117998641651Component } from "./components/app-1637117998641651/app-1637117998641651.component";
import { App7286270677534867Component } from "./components/app-7286270677534867/app-7286270677534867.component";

// @ts-ignore
import html from './app-6565939106377389.component.html?raw';
// @ts-ignore
import style from './app-6565939106377389.component.scss?inline';

/**
 * COMPONENT: 'app-6565939106377389'
 */

export const App6565939106377389Component = new Component({
  name: 'app-6565939106377389',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2787211244039609Component,
App6833572343717011Component,
App1691629848296899Component,
App1637117998641651Component,
App7286270677534867Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
