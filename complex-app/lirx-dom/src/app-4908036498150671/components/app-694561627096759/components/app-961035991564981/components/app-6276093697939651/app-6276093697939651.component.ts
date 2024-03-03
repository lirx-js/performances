import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4107692646107973Component } from "./components/app-4107692646107973/app-4107692646107973.component";
import { App2962989142784023Component } from "./components/app-2962989142784023/app-2962989142784023.component";
import { App8126118015383731Component } from "./components/app-8126118015383731/app-8126118015383731.component";
import { App1746061111373903Component } from "./components/app-1746061111373903/app-1746061111373903.component";
import { App2144424087985593Component } from "./components/app-2144424087985593/app-2144424087985593.component";

// @ts-ignore
import html from './app-6276093697939651.component.html?raw';
// @ts-ignore
import style from './app-6276093697939651.component.scss?inline';

/**
 * COMPONENT: 'app-6276093697939651'
 */

export const App6276093697939651Component = new Component({
  name: 'app-6276093697939651',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4107692646107973Component,
App2962989142784023Component,
App8126118015383731Component,
App1746061111373903Component,
App2144424087985593Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
