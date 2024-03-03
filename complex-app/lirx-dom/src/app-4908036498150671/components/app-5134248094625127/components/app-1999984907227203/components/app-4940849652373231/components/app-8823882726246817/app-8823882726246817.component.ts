import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1510556803924475Component } from "./components/app-1510556803924475/app-1510556803924475.component";
import { App6810005729340745Component } from "./components/app-6810005729340745/app-6810005729340745.component";
import { App929427638876353Component } from "./components/app-929427638876353/app-929427638876353.component";
import { App6773687526659327Component } from "./components/app-6773687526659327/app-6773687526659327.component";
import { App4266683475348595Component } from "./components/app-4266683475348595/app-4266683475348595.component";

// @ts-ignore
import html from './app-8823882726246817.component.html?raw';
// @ts-ignore
import style from './app-8823882726246817.component.scss?inline';

/**
 * COMPONENT: 'app-8823882726246817'
 */

export const App8823882726246817Component = new Component({
  name: 'app-8823882726246817',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1510556803924475Component,
App6810005729340745Component,
App929427638876353Component,
App6773687526659327Component,
App4266683475348595Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
