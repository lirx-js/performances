import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4642179125918821Component } from "./components/app-4642179125918821/app-4642179125918821.component";
import { App6094577109144983Component } from "./components/app-6094577109144983/app-6094577109144983.component";
import { App1384897212511057Component } from "./components/app-1384897212511057/app-1384897212511057.component";
import { App6331753772322887Component } from "./components/app-6331753772322887/app-6331753772322887.component";
import { App5046631786458633Component } from "./components/app-5046631786458633/app-5046631786458633.component";

// @ts-ignore
import html from './app-574177806645857.component.html?raw';
// @ts-ignore
import style from './app-574177806645857.component.scss?inline';

/**
 * COMPONENT: 'app-574177806645857'
 */

export const App574177806645857Component = new Component({
  name: 'app-574177806645857',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4642179125918821Component,
App6094577109144983Component,
App1384897212511057Component,
App6331753772322887Component,
App5046631786458633Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
