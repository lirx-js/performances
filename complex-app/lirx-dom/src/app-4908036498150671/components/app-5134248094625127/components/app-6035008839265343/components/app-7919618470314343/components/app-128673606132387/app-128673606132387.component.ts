import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3193181183147359Component } from "./components/app-3193181183147359/app-3193181183147359.component";
import { App3582424960089401Component } from "./components/app-3582424960089401/app-3582424960089401.component";
import { App8469252250617151Component } from "./components/app-8469252250617151/app-8469252250617151.component";
import { App3835125516796325Component } from "./components/app-3835125516796325/app-3835125516796325.component";
import { App5470026353119143Component } from "./components/app-5470026353119143/app-5470026353119143.component";

// @ts-ignore
import html from './app-128673606132387.component.html?raw';
// @ts-ignore
import style from './app-128673606132387.component.scss?inline';

/**
 * COMPONENT: 'app-128673606132387'
 */

export const App128673606132387Component = new Component({
  name: 'app-128673606132387',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3193181183147359Component,
App3582424960089401Component,
App8469252250617151Component,
App3835125516796325Component,
App5470026353119143Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
