import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2653155610679375Component } from "./components/app-2653155610679375/app-2653155610679375.component";
import { App8046651600768729Component } from "./components/app-8046651600768729/app-8046651600768729.component";
import { App2651646121315575Component } from "./components/app-2651646121315575/app-2651646121315575.component";
import { App3171371596329939Component } from "./components/app-3171371596329939/app-3171371596329939.component";
import { App2627875051401613Component } from "./components/app-2627875051401613/app-2627875051401613.component";

// @ts-ignore
import html from './app-8126118015383731.component.html?raw';
// @ts-ignore
import style from './app-8126118015383731.component.scss?inline';

/**
 * COMPONENT: 'app-8126118015383731'
 */

export const App8126118015383731Component = new Component({
  name: 'app-8126118015383731',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2653155610679375Component,
App8046651600768729Component,
App2651646121315575Component,
App3171371596329939Component,
App2627875051401613Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
