import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2333639385520495Component } from "./components/app-2333639385520495/app-2333639385520495.component";
import { App3093204795495151Component } from "./components/app-3093204795495151/app-3093204795495151.component";
import { App7798196864977127Component } from "./components/app-7798196864977127/app-7798196864977127.component";
import { App3435357424756333Component } from "./components/app-3435357424756333/app-3435357424756333.component";
import { App3209831893600099Component } from "./components/app-3209831893600099/app-3209831893600099.component";

// @ts-ignore
import html from './app-3432560828642039.component.html?raw';
// @ts-ignore
import style from './app-3432560828642039.component.scss?inline';

/**
 * COMPONENT: 'app-3432560828642039'
 */

export const App3432560828642039Component = new Component({
  name: 'app-3432560828642039',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2333639385520495Component,
App3093204795495151Component,
App7798196864977127Component,
App3435357424756333Component,
App3209831893600099Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
