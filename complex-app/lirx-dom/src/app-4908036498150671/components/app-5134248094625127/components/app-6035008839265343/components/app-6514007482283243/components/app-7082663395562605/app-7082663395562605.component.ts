import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App47915312161659Component } from "./components/app-47915312161659/app-47915312161659.component";
import { App7522763119503587Component } from "./components/app-7522763119503587/app-7522763119503587.component";
import { App4021754388768267Component } from "./components/app-4021754388768267/app-4021754388768267.component";
import { App6446343328208033Component } from "./components/app-6446343328208033/app-6446343328208033.component";
import { App8602296787220453Component } from "./components/app-8602296787220453/app-8602296787220453.component";

// @ts-ignore
import html from './app-7082663395562605.component.html?raw';
// @ts-ignore
import style from './app-7082663395562605.component.scss?inline';

/**
 * COMPONENT: 'app-7082663395562605'
 */

export const App7082663395562605Component = new Component({
  name: 'app-7082663395562605',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App47915312161659Component,
App7522763119503587Component,
App4021754388768267Component,
App6446343328208033Component,
App8602296787220453Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
