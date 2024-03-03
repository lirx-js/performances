import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App882254361218253Component } from "./components/app-882254361218253/app-882254361218253.component";
import { App1747021213141507Component } from "./components/app-1747021213141507/app-1747021213141507.component";
import { App3589095119756323Component } from "./components/app-3589095119756323/app-3589095119756323.component";
import { App2528993849993975Component } from "./components/app-2528993849993975/app-2528993849993975.component";
import { App6558384574764505Component } from "./components/app-6558384574764505/app-6558384574764505.component";

// @ts-ignore
import html from './app-3517395260139363.component.html?raw';
// @ts-ignore
import style from './app-3517395260139363.component.scss?inline';

/**
 * COMPONENT: 'app-3517395260139363'
 */

export const App3517395260139363Component = new Component({
  name: 'app-3517395260139363',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App882254361218253Component,
App1747021213141507Component,
App3589095119756323Component,
App2528993849993975Component,
App6558384574764505Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
