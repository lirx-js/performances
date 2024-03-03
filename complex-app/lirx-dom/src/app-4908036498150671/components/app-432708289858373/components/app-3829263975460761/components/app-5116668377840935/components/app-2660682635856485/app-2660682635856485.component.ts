import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8001641317722031Component } from "./components/app-8001641317722031/app-8001641317722031.component";
import { App1482128264710829Component } from "./components/app-1482128264710829/app-1482128264710829.component";
import { App5375944335282011Component } from "./components/app-5375944335282011/app-5375944335282011.component";
import { App1781940593914489Component } from "./components/app-1781940593914489/app-1781940593914489.component";
import { App5548802701704763Component } from "./components/app-5548802701704763/app-5548802701704763.component";

// @ts-ignore
import html from './app-2660682635856485.component.html?raw';
// @ts-ignore
import style from './app-2660682635856485.component.scss?inline';

/**
 * COMPONENT: 'app-2660682635856485'
 */

export const App2660682635856485Component = new Component({
  name: 'app-2660682635856485',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8001641317722031Component,
App1482128264710829Component,
App5375944335282011Component,
App1781940593914489Component,
App5548802701704763Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
