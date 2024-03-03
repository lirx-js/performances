import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3528304740577561Component } from "./components/app-3528304740577561/app-3528304740577561.component";
import { App4253226889650965Component } from "./components/app-4253226889650965/app-4253226889650965.component";
import { App6966289689409799Component } from "./components/app-6966289689409799/app-6966289689409799.component";
import { App6624970953580375Component } from "./components/app-6624970953580375/app-6624970953580375.component";
import { App8353983671736857Component } from "./components/app-8353983671736857/app-8353983671736857.component";

// @ts-ignore
import html from './app-1513638946492245.component.html?raw';
// @ts-ignore
import style from './app-1513638946492245.component.scss?inline';

/**
 * COMPONENT: 'app-1513638946492245'
 */

export const App1513638946492245Component = new Component({
  name: 'app-1513638946492245',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3528304740577561Component,
App4253226889650965Component,
App6966289689409799Component,
App6624970953580375Component,
App8353983671736857Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
