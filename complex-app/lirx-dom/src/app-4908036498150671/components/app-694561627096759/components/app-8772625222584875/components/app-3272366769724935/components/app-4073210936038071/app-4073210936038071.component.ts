import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1598912877806961Component } from "./components/app-1598912877806961/app-1598912877806961.component";
import { App5896575604261463Component } from "./components/app-5896575604261463/app-5896575604261463.component";
import { App5586706712203635Component } from "./components/app-5586706712203635/app-5586706712203635.component";
import { App6959195624919849Component } from "./components/app-6959195624919849/app-6959195624919849.component";
import { App473897390477873Component } from "./components/app-473897390477873/app-473897390477873.component";

// @ts-ignore
import html from './app-4073210936038071.component.html?raw';
// @ts-ignore
import style from './app-4073210936038071.component.scss?inline';

/**
 * COMPONENT: 'app-4073210936038071'
 */

export const App4073210936038071Component = new Component({
  name: 'app-4073210936038071',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1598912877806961Component,
App5896575604261463Component,
App5586706712203635Component,
App6959195624919849Component,
App473897390477873Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
