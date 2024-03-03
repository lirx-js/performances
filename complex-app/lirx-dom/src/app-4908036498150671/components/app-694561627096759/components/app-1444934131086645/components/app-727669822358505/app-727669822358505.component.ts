import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1402504917076623Component } from "./components/app-1402504917076623/app-1402504917076623.component";
import { App404679898679449Component } from "./components/app-404679898679449/app-404679898679449.component";
import { App7097530241248575Component } from "./components/app-7097530241248575/app-7097530241248575.component";
import { App1884195866683749Component } from "./components/app-1884195866683749/app-1884195866683749.component";
import { App504309414739843Component } from "./components/app-504309414739843/app-504309414739843.component";

// @ts-ignore
import html from './app-727669822358505.component.html?raw';
// @ts-ignore
import style from './app-727669822358505.component.scss?inline';

/**
 * COMPONENT: 'app-727669822358505'
 */

export const App727669822358505Component = new Component({
  name: 'app-727669822358505',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1402504917076623Component,
App404679898679449Component,
App7097530241248575Component,
App1884195866683749Component,
App504309414739843Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
