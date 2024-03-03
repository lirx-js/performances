import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4507349921002211Component } from "./components/app-4507349921002211/app-4507349921002211.component";
import { App8230531853490711Component } from "./components/app-8230531853490711/app-8230531853490711.component";
import { App8104996879693859Component } from "./components/app-8104996879693859/app-8104996879693859.component";
import { App148683226337971Component } from "./components/app-148683226337971/app-148683226337971.component";
import { App7474945202608019Component } from "./components/app-7474945202608019/app-7474945202608019.component";

// @ts-ignore
import html from './app-4088582898652957.component.html?raw';
// @ts-ignore
import style from './app-4088582898652957.component.scss?inline';

/**
 * COMPONENT: 'app-4088582898652957'
 */

export const App4088582898652957Component = new Component({
  name: 'app-4088582898652957',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4507349921002211Component,
App8230531853490711Component,
App8104996879693859Component,
App148683226337971Component,
App7474945202608019Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
