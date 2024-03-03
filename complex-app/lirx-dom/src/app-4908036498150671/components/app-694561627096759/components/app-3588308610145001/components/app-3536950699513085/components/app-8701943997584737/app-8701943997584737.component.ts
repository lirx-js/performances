import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8558843014882031Component } from "./components/app-8558843014882031/app-8558843014882031.component";
import { App8463695791755355Component } from "./components/app-8463695791755355/app-8463695791755355.component";
import { App7556433210129595Component } from "./components/app-7556433210129595/app-7556433210129595.component";
import { App5272094584056715Component } from "./components/app-5272094584056715/app-5272094584056715.component";
import { App1720403323886943Component } from "./components/app-1720403323886943/app-1720403323886943.component";

// @ts-ignore
import html from './app-8701943997584737.component.html?raw';
// @ts-ignore
import style from './app-8701943997584737.component.scss?inline';

/**
 * COMPONENT: 'app-8701943997584737'
 */

export const App8701943997584737Component = new Component({
  name: 'app-8701943997584737',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8558843014882031Component,
App8463695791755355Component,
App7556433210129595Component,
App5272094584056715Component,
App1720403323886943Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
