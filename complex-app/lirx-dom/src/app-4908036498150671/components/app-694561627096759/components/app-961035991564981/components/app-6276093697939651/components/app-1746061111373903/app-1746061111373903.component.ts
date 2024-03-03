import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App356742605890787Component } from "./components/app-356742605890787/app-356742605890787.component";
import { App6814981350530979Component } from "./components/app-6814981350530979/app-6814981350530979.component";
import { App8192137016506793Component } from "./components/app-8192137016506793/app-8192137016506793.component";
import { App6473796280567935Component } from "./components/app-6473796280567935/app-6473796280567935.component";
import { App950190933198225Component } from "./components/app-950190933198225/app-950190933198225.component";

// @ts-ignore
import html from './app-1746061111373903.component.html?raw';
// @ts-ignore
import style from './app-1746061111373903.component.scss?inline';

/**
 * COMPONENT: 'app-1746061111373903'
 */

export const App1746061111373903Component = new Component({
  name: 'app-1746061111373903',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App356742605890787Component,
App6814981350530979Component,
App8192137016506793Component,
App6473796280567935Component,
App950190933198225Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
