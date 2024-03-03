import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4866774633977821Component } from "./components/app-4866774633977821/app-4866774633977821.component";
import { App2438347584057825Component } from "./components/app-2438347584057825/app-2438347584057825.component";
import { App2471122893873977Component } from "./components/app-2471122893873977/app-2471122893873977.component";
import { App7809328440456145Component } from "./components/app-7809328440456145/app-7809328440456145.component";
import { App4130730895095207Component } from "./components/app-4130730895095207/app-4130730895095207.component";

// @ts-ignore
import html from './app-8207830815529367.component.html?raw';
// @ts-ignore
import style from './app-8207830815529367.component.scss?inline';

/**
 * COMPONENT: 'app-8207830815529367'
 */

export const App8207830815529367Component = new Component({
  name: 'app-8207830815529367',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4866774633977821Component,
App2438347584057825Component,
App2471122893873977Component,
App7809328440456145Component,
App4130730895095207Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
