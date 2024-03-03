import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8030762841442083Component } from "./components/app-8030762841442083/app-8030762841442083.component";
import { App8084266410495817Component } from "./components/app-8084266410495817/app-8084266410495817.component";
import { App8873442152701171Component } from "./components/app-8873442152701171/app-8873442152701171.component";
import { App8530010048987099Component } from "./components/app-8530010048987099/app-8530010048987099.component";
import { App7111031072599851Component } from "./components/app-7111031072599851/app-7111031072599851.component";

// @ts-ignore
import html from './app-7294238675134657.component.html?raw';
// @ts-ignore
import style from './app-7294238675134657.component.scss?inline';

/**
 * COMPONENT: 'app-7294238675134657'
 */

export const App7294238675134657Component = new Component({
  name: 'app-7294238675134657',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8030762841442083Component,
App8084266410495817Component,
App8873442152701171Component,
App8530010048987099Component,
App7111031072599851Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
