import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2666094437687443Component } from "./components/app-2666094437687443/app-2666094437687443.component";
import { App4168843080408249Component } from "./components/app-4168843080408249/app-4168843080408249.component";
import { App3680859270543927Component } from "./components/app-3680859270543927/app-3680859270543927.component";
import { App6766925919850953Component } from "./components/app-6766925919850953/app-6766925919850953.component";
import { App1830108771082525Component } from "./components/app-1830108771082525/app-1830108771082525.component";

// @ts-ignore
import html from './app-5277679738889427.component.html?raw';
// @ts-ignore
import style from './app-5277679738889427.component.scss?inline';

/**
 * COMPONENT: 'app-5277679738889427'
 */

export const App5277679738889427Component = new Component({
  name: 'app-5277679738889427',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2666094437687443Component,
App4168843080408249Component,
App3680859270543927Component,
App6766925919850953Component,
App1830108771082525Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
