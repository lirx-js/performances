import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8517133991664879Component } from "./components/app-8517133991664879/app-8517133991664879.component";
import { App3645586422704467Component } from "./components/app-3645586422704467/app-3645586422704467.component";
import { App6010588819382071Component } from "./components/app-6010588819382071/app-6010588819382071.component";
import { App7563002021376289Component } from "./components/app-7563002021376289/app-7563002021376289.component";
import { App2535927793864027Component } from "./components/app-2535927793864027/app-2535927793864027.component";

// @ts-ignore
import html from './app-2720935897519707.component.html?raw';
// @ts-ignore
import style from './app-2720935897519707.component.scss?inline';

/**
 * COMPONENT: 'app-2720935897519707'
 */

export const App2720935897519707Component = new Component({
  name: 'app-2720935897519707',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8517133991664879Component,
App3645586422704467Component,
App6010588819382071Component,
App7563002021376289Component,
App2535927793864027Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
