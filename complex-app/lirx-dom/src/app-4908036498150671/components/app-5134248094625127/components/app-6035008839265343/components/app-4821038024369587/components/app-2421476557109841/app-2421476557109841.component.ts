import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8760825671275825Component } from "./components/app-8760825671275825/app-8760825671275825.component";
import { App2517379098114253Component } from "./components/app-2517379098114253/app-2517379098114253.component";
import { App3335727025716665Component } from "./components/app-3335727025716665/app-3335727025716665.component";
import { App2834286809135491Component } from "./components/app-2834286809135491/app-2834286809135491.component";
import { App6488041712091969Component } from "./components/app-6488041712091969/app-6488041712091969.component";

// @ts-ignore
import html from './app-2421476557109841.component.html?raw';
// @ts-ignore
import style from './app-2421476557109841.component.scss?inline';

/**
 * COMPONENT: 'app-2421476557109841'
 */

export const App2421476557109841Component = new Component({
  name: 'app-2421476557109841',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8760825671275825Component,
App2517379098114253Component,
App3335727025716665Component,
App2834286809135491Component,
App6488041712091969Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
