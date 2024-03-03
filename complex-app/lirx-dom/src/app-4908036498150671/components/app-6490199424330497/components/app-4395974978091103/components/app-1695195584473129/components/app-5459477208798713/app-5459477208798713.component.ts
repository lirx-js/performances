import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1909687348125453Component } from "./components/app-1909687348125453/app-1909687348125453.component";
import { App6014120329511673Component } from "./components/app-6014120329511673/app-6014120329511673.component";
import { App2257385269761801Component } from "./components/app-2257385269761801/app-2257385269761801.component";
import { App8741508361297079Component } from "./components/app-8741508361297079/app-8741508361297079.component";
import { App4123470113408387Component } from "./components/app-4123470113408387/app-4123470113408387.component";

// @ts-ignore
import html from './app-5459477208798713.component.html?raw';
// @ts-ignore
import style from './app-5459477208798713.component.scss?inline';

/**
 * COMPONENT: 'app-5459477208798713'
 */

export const App5459477208798713Component = new Component({
  name: 'app-5459477208798713',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1909687348125453Component,
App6014120329511673Component,
App2257385269761801Component,
App8741508361297079Component,
App4123470113408387Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
