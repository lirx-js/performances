import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3129000502153007Component } from "./components/app-3129000502153007/app-3129000502153007.component";
import { App1600430303755747Component } from "./components/app-1600430303755747/app-1600430303755747.component";
import { App5679878246439377Component } from "./components/app-5679878246439377/app-5679878246439377.component";
import { App4932743096435467Component } from "./components/app-4932743096435467/app-4932743096435467.component";
import { App4323156607171553Component } from "./components/app-4323156607171553/app-4323156607171553.component";

// @ts-ignore
import html from './app-6031146838627227.component.html?raw';
// @ts-ignore
import style from './app-6031146838627227.component.scss?inline';

/**
 * COMPONENT: 'app-6031146838627227'
 */

export const App6031146838627227Component = new Component({
  name: 'app-6031146838627227',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3129000502153007Component,
App1600430303755747Component,
App5679878246439377Component,
App4932743096435467Component,
App4323156607171553Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
