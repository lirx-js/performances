import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3741807907974971Component } from "./components/app-3741807907974971/app-3741807907974971.component";
import { App3558176359541209Component } from "./components/app-3558176359541209/app-3558176359541209.component";
import { App4667033383292607Component } from "./components/app-4667033383292607/app-4667033383292607.component";
import { App4838889906831281Component } from "./components/app-4838889906831281/app-4838889906831281.component";
import { App7444045392865339Component } from "./components/app-7444045392865339/app-7444045392865339.component";

// @ts-ignore
import html from './app-8749630996657953.component.html?raw';
// @ts-ignore
import style from './app-8749630996657953.component.scss?inline';

/**
 * COMPONENT: 'app-8749630996657953'
 */

export const App8749630996657953Component = new Component({
  name: 'app-8749630996657953',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3741807907974971Component,
App3558176359541209Component,
App4667033383292607Component,
App4838889906831281Component,
App7444045392865339Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
