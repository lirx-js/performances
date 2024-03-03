import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6257212302779547Component } from "./components/app-6257212302779547/app-6257212302779547.component";
import { App7081322183091Component } from "./components/app-7081322183091/app-7081322183091.component";
import { App7022347514607521Component } from "./components/app-7022347514607521/app-7022347514607521.component";
import { App3912617333900327Component } from "./components/app-3912617333900327/app-3912617333900327.component";
import { App5377994088904825Component } from "./components/app-5377994088904825/app-5377994088904825.component";

// @ts-ignore
import html from './app-8374373048909625.component.html?raw';
// @ts-ignore
import style from './app-8374373048909625.component.scss?inline';

/**
 * COMPONENT: 'app-8374373048909625'
 */

export const App8374373048909625Component = new Component({
  name: 'app-8374373048909625',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6257212302779547Component,
App7081322183091Component,
App7022347514607521Component,
App3912617333900327Component,
App5377994088904825Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
