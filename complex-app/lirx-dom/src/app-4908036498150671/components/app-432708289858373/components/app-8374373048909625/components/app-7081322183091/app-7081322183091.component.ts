import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8739012848653149Component } from "./components/app-8739012848653149/app-8739012848653149.component";
import { App7636188886442995Component } from "./components/app-7636188886442995/app-7636188886442995.component";
import { App342030669724623Component } from "./components/app-342030669724623/app-342030669724623.component";
import { App7289511834058501Component } from "./components/app-7289511834058501/app-7289511834058501.component";
import { App7884708158957679Component } from "./components/app-7884708158957679/app-7884708158957679.component";

// @ts-ignore
import html from './app-7081322183091.component.html?raw';
// @ts-ignore
import style from './app-7081322183091.component.scss?inline';

/**
 * COMPONENT: 'app-7081322183091'
 */

export const App7081322183091Component = new Component({
  name: 'app-7081322183091',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8739012848653149Component,
App7636188886442995Component,
App342030669724623Component,
App7289511834058501Component,
App7884708158957679Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
