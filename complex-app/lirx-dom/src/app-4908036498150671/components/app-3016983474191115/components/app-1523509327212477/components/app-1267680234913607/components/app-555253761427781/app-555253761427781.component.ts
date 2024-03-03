import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1326812974451731Component } from "./components/app-1326812974451731/app-1326812974451731.component";
import { App1891020546559771Component } from "./components/app-1891020546559771/app-1891020546559771.component";
import { App7340176152296347Component } from "./components/app-7340176152296347/app-7340176152296347.component";
import { App6994962130129749Component } from "./components/app-6994962130129749/app-6994962130129749.component";
import { App7746264277855569Component } from "./components/app-7746264277855569/app-7746264277855569.component";

// @ts-ignore
import html from './app-555253761427781.component.html?raw';
// @ts-ignore
import style from './app-555253761427781.component.scss?inline';

/**
 * COMPONENT: 'app-555253761427781'
 */

export const App555253761427781Component = new Component({
  name: 'app-555253761427781',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1326812974451731Component,
App1891020546559771Component,
App7340176152296347Component,
App6994962130129749Component,
App7746264277855569Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
