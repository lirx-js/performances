import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6975176667296575Component } from "./components/app-6975176667296575/app-6975176667296575.component";
import { App7264452827464333Component } from "./components/app-7264452827464333/app-7264452827464333.component";
import { App2919302536371425Component } from "./components/app-2919302536371425/app-2919302536371425.component";
import { App7720399437076717Component } from "./components/app-7720399437076717/app-7720399437076717.component";
import { App8397687993803265Component } from "./components/app-8397687993803265/app-8397687993803265.component";

// @ts-ignore
import html from './app-7929105873180545.component.html?raw';
// @ts-ignore
import style from './app-7929105873180545.component.scss?inline';

/**
 * COMPONENT: 'app-7929105873180545'
 */

export const App7929105873180545Component = new Component({
  name: 'app-7929105873180545',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6975176667296575Component,
App7264452827464333Component,
App2919302536371425Component,
App7720399437076717Component,
App8397687993803265Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
