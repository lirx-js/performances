import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2385186322118231Component } from "./components/app-2385186322118231/app-2385186322118231.component";
import { App8712142333678407Component } from "./components/app-8712142333678407/app-8712142333678407.component";
import { App8724180520979487Component } from "./components/app-8724180520979487/app-8724180520979487.component";
import { App7150642511776555Component } from "./components/app-7150642511776555/app-7150642511776555.component";
import { App2623182910541161Component } from "./components/app-2623182910541161/app-2623182910541161.component";

// @ts-ignore
import html from './app-3394185408383383.component.html?raw';
// @ts-ignore
import style from './app-3394185408383383.component.scss?inline';

/**
 * COMPONENT: 'app-3394185408383383'
 */

export const App3394185408383383Component = new Component({
  name: 'app-3394185408383383',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2385186322118231Component,
App8712142333678407Component,
App8724180520979487Component,
App7150642511776555Component,
App2623182910541161Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
