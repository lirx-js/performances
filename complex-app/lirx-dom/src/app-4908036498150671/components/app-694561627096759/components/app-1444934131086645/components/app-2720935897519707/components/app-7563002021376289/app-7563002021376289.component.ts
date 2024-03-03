import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6762977584027015Component } from "./components/app-6762977584027015/app-6762977584027015.component";
import { App6276085002595997Component } from "./components/app-6276085002595997/app-6276085002595997.component";
import { App8765432909389197Component } from "./components/app-8765432909389197/app-8765432909389197.component";
import { App65442729629779Component } from "./components/app-65442729629779/app-65442729629779.component";
import { App4666062655761215Component } from "./components/app-4666062655761215/app-4666062655761215.component";

// @ts-ignore
import html from './app-7563002021376289.component.html?raw';
// @ts-ignore
import style from './app-7563002021376289.component.scss?inline';

/**
 * COMPONENT: 'app-7563002021376289'
 */

export const App7563002021376289Component = new Component({
  name: 'app-7563002021376289',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6762977584027015Component,
App6276085002595997Component,
App8765432909389197Component,
App65442729629779Component,
App4666062655761215Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
