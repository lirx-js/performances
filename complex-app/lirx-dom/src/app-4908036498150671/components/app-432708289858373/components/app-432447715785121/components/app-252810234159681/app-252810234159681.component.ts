import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5855170623255709Component } from "./components/app-5855170623255709/app-5855170623255709.component";
import { App2377912002194491Component } from "./components/app-2377912002194491/app-2377912002194491.component";
import { App3497610344157151Component } from "./components/app-3497610344157151/app-3497610344157151.component";
import { App1380678499506215Component } from "./components/app-1380678499506215/app-1380678499506215.component";
import { App5843079715607917Component } from "./components/app-5843079715607917/app-5843079715607917.component";

// @ts-ignore
import html from './app-252810234159681.component.html?raw';
// @ts-ignore
import style from './app-252810234159681.component.scss?inline';

/**
 * COMPONENT: 'app-252810234159681'
 */

export const App252810234159681Component = new Component({
  name: 'app-252810234159681',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5855170623255709Component,
App2377912002194491Component,
App3497610344157151Component,
App1380678499506215Component,
App5843079715607917Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
