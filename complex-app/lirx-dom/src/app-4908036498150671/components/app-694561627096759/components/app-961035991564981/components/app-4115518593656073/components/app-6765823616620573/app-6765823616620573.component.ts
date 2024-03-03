import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4558816715638319Component } from "./components/app-4558816715638319/app-4558816715638319.component";
import { App6815269676280099Component } from "./components/app-6815269676280099/app-6815269676280099.component";
import { App1042722888625297Component } from "./components/app-1042722888625297/app-1042722888625297.component";
import { App265858323044479Component } from "./components/app-265858323044479/app-265858323044479.component";
import { App6531924388652885Component } from "./components/app-6531924388652885/app-6531924388652885.component";

// @ts-ignore
import html from './app-6765823616620573.component.html?raw';
// @ts-ignore
import style from './app-6765823616620573.component.scss?inline';

/**
 * COMPONENT: 'app-6765823616620573'
 */

export const App6765823616620573Component = new Component({
  name: 'app-6765823616620573',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4558816715638319Component,
App6815269676280099Component,
App1042722888625297Component,
App265858323044479Component,
App6531924388652885Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
