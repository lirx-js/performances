import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App201948385493607Component } from "./components/app-201948385493607/app-201948385493607.component";
import { App1197710205579173Component } from "./components/app-1197710205579173/app-1197710205579173.component";
import { App8123493364613207Component } from "./components/app-8123493364613207/app-8123493364613207.component";
import { App8499037201867565Component } from "./components/app-8499037201867565/app-8499037201867565.component";
import { App5799834396061759Component } from "./components/app-5799834396061759/app-5799834396061759.component";

// @ts-ignore
import html from './app-6010588819382071.component.html?raw';
// @ts-ignore
import style from './app-6010588819382071.component.scss?inline';

/**
 * COMPONENT: 'app-6010588819382071'
 */

export const App6010588819382071Component = new Component({
  name: 'app-6010588819382071',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App201948385493607Component,
App1197710205579173Component,
App8123493364613207Component,
App8499037201867565Component,
App5799834396061759Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
