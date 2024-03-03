import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6965470886347231Component } from "./components/app-6965470886347231/app-6965470886347231.component";
import { App7753447823511173Component } from "./components/app-7753447823511173/app-7753447823511173.component";
import { App5098600725530033Component } from "./components/app-5098600725530033/app-5098600725530033.component";
import { App7397310826342247Component } from "./components/app-7397310826342247/app-7397310826342247.component";
import { App8823882726246817Component } from "./components/app-8823882726246817/app-8823882726246817.component";

// @ts-ignore
import html from './app-4940849652373231.component.html?raw';
// @ts-ignore
import style from './app-4940849652373231.component.scss?inline';

/**
 * COMPONENT: 'app-4940849652373231'
 */

export const App4940849652373231Component = new Component({
  name: 'app-4940849652373231',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6965470886347231Component,
App7753447823511173Component,
App5098600725530033Component,
App7397310826342247Component,
App8823882726246817Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
