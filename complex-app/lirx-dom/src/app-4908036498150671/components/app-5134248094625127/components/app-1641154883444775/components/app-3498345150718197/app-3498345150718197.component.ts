import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1927715359018549Component } from "./components/app-1927715359018549/app-1927715359018549.component";
import { App7608160565654365Component } from "./components/app-7608160565654365/app-7608160565654365.component";
import { App6446620116124113Component } from "./components/app-6446620116124113/app-6446620116124113.component";
import { App6780877661890049Component } from "./components/app-6780877661890049/app-6780877661890049.component";
import { App4943321361543501Component } from "./components/app-4943321361543501/app-4943321361543501.component";

// @ts-ignore
import html from './app-3498345150718197.component.html?raw';
// @ts-ignore
import style from './app-3498345150718197.component.scss?inline';

/**
 * COMPONENT: 'app-3498345150718197'
 */

export const App3498345150718197Component = new Component({
  name: 'app-3498345150718197',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1927715359018549Component,
App7608160565654365Component,
App6446620116124113Component,
App6780877661890049Component,
App4943321361543501Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
