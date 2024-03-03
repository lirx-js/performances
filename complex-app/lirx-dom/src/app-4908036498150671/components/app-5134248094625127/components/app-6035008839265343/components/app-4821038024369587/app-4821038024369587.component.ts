import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8273438445805697Component } from "./components/app-8273438445805697/app-8273438445805697.component";
import { App6313893222970531Component } from "./components/app-6313893222970531/app-6313893222970531.component";
import { App2421476557109841Component } from "./components/app-2421476557109841/app-2421476557109841.component";
import { App4220914137298213Component } from "./components/app-4220914137298213/app-4220914137298213.component";
import { App7952905325725349Component } from "./components/app-7952905325725349/app-7952905325725349.component";

// @ts-ignore
import html from './app-4821038024369587.component.html?raw';
// @ts-ignore
import style from './app-4821038024369587.component.scss?inline';

/**
 * COMPONENT: 'app-4821038024369587'
 */

export const App4821038024369587Component = new Component({
  name: 'app-4821038024369587',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8273438445805697Component,
App6313893222970531Component,
App2421476557109841Component,
App4220914137298213Component,
App7952905325725349Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
