import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1271850223817227Component } from "./components/app-1271850223817227/app-1271850223817227.component";
import { App321574355533235Component } from "./components/app-321574355533235/app-321574355533235.component";
import { App2573757424610623Component } from "./components/app-2573757424610623/app-2573757424610623.component";
import { App2886243868432259Component } from "./components/app-2886243868432259/app-2886243868432259.component";
import { App7579384404868539Component } from "./components/app-7579384404868539/app-7579384404868539.component";

// @ts-ignore
import html from './app-3164106405081923.component.html?raw';
// @ts-ignore
import style from './app-3164106405081923.component.scss?inline';

/**
 * COMPONENT: 'app-3164106405081923'
 */

export const App3164106405081923Component = new Component({
  name: 'app-3164106405081923',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1271850223817227Component,
App321574355533235Component,
App2573757424610623Component,
App2886243868432259Component,
App7579384404868539Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
