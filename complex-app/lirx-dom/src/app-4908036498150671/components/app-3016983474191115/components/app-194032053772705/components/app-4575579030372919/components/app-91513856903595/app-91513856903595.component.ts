import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App419261849011897Component } from "./components/app-419261849011897/app-419261849011897.component";
import { App280976821570909Component } from "./components/app-280976821570909/app-280976821570909.component";
import { App6055944287029589Component } from "./components/app-6055944287029589/app-6055944287029589.component";
import { App5695138488637987Component } from "./components/app-5695138488637987/app-5695138488637987.component";
import { App8472770019276311Component } from "./components/app-8472770019276311/app-8472770019276311.component";

// @ts-ignore
import html from './app-91513856903595.component.html?raw';
// @ts-ignore
import style from './app-91513856903595.component.scss?inline';

/**
 * COMPONENT: 'app-91513856903595'
 */

export const App91513856903595Component = new Component({
  name: 'app-91513856903595',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App419261849011897Component,
App280976821570909Component,
App6055944287029589Component,
App5695138488637987Component,
App8472770019276311Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
