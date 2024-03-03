import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8002834493115587Component } from "./components/app-8002834493115587/app-8002834493115587.component";
import { App3412260185821705Component } from "./components/app-3412260185821705/app-3412260185821705.component";
import { App6015162001546027Component } from "./components/app-6015162001546027/app-6015162001546027.component";
import { App3081416357597287Component } from "./components/app-3081416357597287/app-3081416357597287.component";
import { App1371121985684893Component } from "./components/app-1371121985684893/app-1371121985684893.component";

// @ts-ignore
import html from './app-4029743314731029.component.html?raw';
// @ts-ignore
import style from './app-4029743314731029.component.scss?inline';

/**
 * COMPONENT: 'app-4029743314731029'
 */

export const App4029743314731029Component = new Component({
  name: 'app-4029743314731029',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8002834493115587Component,
App3412260185821705Component,
App6015162001546027Component,
App3081416357597287Component,
App1371121985684893Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
