import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1803283504646375Component } from "./components/app-1803283504646375/app-1803283504646375.component";
import { App6248364488497631Component } from "./components/app-6248364488497631/app-6248364488497631.component";
import { App6651755705596779Component } from "./components/app-6651755705596779/app-6651755705596779.component";
import { App7532267599810711Component } from "./components/app-7532267599810711/app-7532267599810711.component";
import { App5517157114171237Component } from "./components/app-5517157114171237/app-5517157114171237.component";

// @ts-ignore
import html from './app-3583310704189795.component.html?raw';
// @ts-ignore
import style from './app-3583310704189795.component.scss?inline';

/**
 * COMPONENT: 'app-3583310704189795'
 */

export const App3583310704189795Component = new Component({
  name: 'app-3583310704189795',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1803283504646375Component,
App6248364488497631Component,
App6651755705596779Component,
App7532267599810711Component,
App5517157114171237Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
