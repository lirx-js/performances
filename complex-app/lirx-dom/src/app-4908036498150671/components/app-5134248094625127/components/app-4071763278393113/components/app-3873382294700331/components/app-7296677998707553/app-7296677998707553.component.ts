import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7642969624672427Component } from "./components/app-7642969624672427/app-7642969624672427.component";
import { App6830343216611269Component } from "./components/app-6830343216611269/app-6830343216611269.component";
import { App4498176579995811Component } from "./components/app-4498176579995811/app-4498176579995811.component";
import { App3310312639630095Component } from "./components/app-3310312639630095/app-3310312639630095.component";
import { App2290925224354253Component } from "./components/app-2290925224354253/app-2290925224354253.component";

// @ts-ignore
import html from './app-7296677998707553.component.html?raw';
// @ts-ignore
import style from './app-7296677998707553.component.scss?inline';

/**
 * COMPONENT: 'app-7296677998707553'
 */

export const App7296677998707553Component = new Component({
  name: 'app-7296677998707553',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7642969624672427Component,
App6830343216611269Component,
App4498176579995811Component,
App3310312639630095Component,
App2290925224354253Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
