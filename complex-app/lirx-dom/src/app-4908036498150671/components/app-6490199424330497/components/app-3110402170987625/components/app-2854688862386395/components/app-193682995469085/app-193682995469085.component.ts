import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8818231890733741Component } from "./components/app-8818231890733741/app-8818231890733741.component";
import { App5707636117222749Component } from "./components/app-5707636117222749/app-5707636117222749.component";
import { App3128807441378175Component } from "./components/app-3128807441378175/app-3128807441378175.component";
import { App2483489392822829Component } from "./components/app-2483489392822829/app-2483489392822829.component";
import { App8262755747097325Component } from "./components/app-8262755747097325/app-8262755747097325.component";

// @ts-ignore
import html from './app-193682995469085.component.html?raw';
// @ts-ignore
import style from './app-193682995469085.component.scss?inline';

/**
 * COMPONENT: 'app-193682995469085'
 */

export const App193682995469085Component = new Component({
  name: 'app-193682995469085',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8818231890733741Component,
App5707636117222749Component,
App3128807441378175Component,
App2483489392822829Component,
App8262755747097325Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
