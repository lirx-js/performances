import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8507672106773703Component } from "./components/app-8507672106773703/app-8507672106773703.component";
import { App5115699606062893Component } from "./components/app-5115699606062893/app-5115699606062893.component";
import { App7518402214220301Component } from "./components/app-7518402214220301/app-7518402214220301.component";
import { App5918056832199417Component } from "./components/app-5918056832199417/app-5918056832199417.component";
import { App2129365601501619Component } from "./components/app-2129365601501619/app-2129365601501619.component";

// @ts-ignore
import html from './app-8148616252210005.component.html?raw';
// @ts-ignore
import style from './app-8148616252210005.component.scss?inline';

/**
 * COMPONENT: 'app-8148616252210005'
 */

export const App8148616252210005Component = new Component({
  name: 'app-8148616252210005',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8507672106773703Component,
App5115699606062893Component,
App7518402214220301Component,
App5918056832199417Component,
App2129365601501619Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
