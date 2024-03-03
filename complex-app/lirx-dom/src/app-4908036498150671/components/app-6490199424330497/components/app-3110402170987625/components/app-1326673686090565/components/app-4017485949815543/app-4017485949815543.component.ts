import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App138464080594823Component } from "./components/app-138464080594823/app-138464080594823.component";
import { App8712882889471113Component } from "./components/app-8712882889471113/app-8712882889471113.component";
import { App4250381829800413Component } from "./components/app-4250381829800413/app-4250381829800413.component";
import { App7889583732998743Component } from "./components/app-7889583732998743/app-7889583732998743.component";
import { App7525463778187717Component } from "./components/app-7525463778187717/app-7525463778187717.component";

// @ts-ignore
import html from './app-4017485949815543.component.html?raw';
// @ts-ignore
import style from './app-4017485949815543.component.scss?inline';

/**
 * COMPONENT: 'app-4017485949815543'
 */

export const App4017485949815543Component = new Component({
  name: 'app-4017485949815543',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App138464080594823Component,
App8712882889471113Component,
App4250381829800413Component,
App7889583732998743Component,
App7525463778187717Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
