import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8954706049603511Component } from "./components/app-8954706049603511/app-8954706049603511.component";
import { App6714763951825233Component } from "./components/app-6714763951825233/app-6714763951825233.component";
import { App1923936467878119Component } from "./components/app-1923936467878119/app-1923936467878119.component";
import { App321190008039381Component } from "./components/app-321190008039381/app-321190008039381.component";
import { App3862323774235169Component } from "./components/app-3862323774235169/app-3862323774235169.component";

// @ts-ignore
import html from './app-8746377222727.component.html?raw';
// @ts-ignore
import style from './app-8746377222727.component.scss?inline';

/**
 * COMPONENT: 'app-8746377222727'
 */

export const App8746377222727Component = new Component({
  name: 'app-8746377222727',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8954706049603511Component,
App6714763951825233Component,
App1923936467878119Component,
App321190008039381Component,
App3862323774235169Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
