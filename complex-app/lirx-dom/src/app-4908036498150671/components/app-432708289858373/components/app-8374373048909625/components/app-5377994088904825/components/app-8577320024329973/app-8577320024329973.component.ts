import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App415463902970569Component } from "./components/app-415463902970569/app-415463902970569.component";
import { App6287259056594609Component } from "./components/app-6287259056594609/app-6287259056594609.component";
import { App4457121403154325Component } from "./components/app-4457121403154325/app-4457121403154325.component";
import { App2867473298292491Component } from "./components/app-2867473298292491/app-2867473298292491.component";
import { App3906493144713457Component } from "./components/app-3906493144713457/app-3906493144713457.component";

// @ts-ignore
import html from './app-8577320024329973.component.html?raw';
// @ts-ignore
import style from './app-8577320024329973.component.scss?inline';

/**
 * COMPONENT: 'app-8577320024329973'
 */

export const App8577320024329973Component = new Component({
  name: 'app-8577320024329973',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App415463902970569Component,
App6287259056594609Component,
App4457121403154325Component,
App2867473298292491Component,
App3906493144713457Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
