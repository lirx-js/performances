import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App315048810300791Component } from "./components/app-315048810300791/app-315048810300791.component";
import { App8625028404196327Component } from "./components/app-8625028404196327/app-8625028404196327.component";
import { App8987163243730535Component } from "./components/app-8987163243730535/app-8987163243730535.component";
import { App870697324548249Component } from "./components/app-870697324548249/app-870697324548249.component";
import { App852359340774639Component } from "./components/app-852359340774639/app-852359340774639.component";

// @ts-ignore
import html from './app-2990945532132245.component.html?raw';
// @ts-ignore
import style from './app-2990945532132245.component.scss?inline';

/**
 * COMPONENT: 'app-2990945532132245'
 */

export const App2990945532132245Component = new Component({
  name: 'app-2990945532132245',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App315048810300791Component,
App8625028404196327Component,
App8987163243730535Component,
App870697324548249Component,
App852359340774639Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
