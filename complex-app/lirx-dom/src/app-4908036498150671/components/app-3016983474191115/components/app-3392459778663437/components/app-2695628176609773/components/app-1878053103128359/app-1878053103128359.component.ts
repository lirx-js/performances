import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7792364792833279Component } from "./components/app-7792364792833279/app-7792364792833279.component";
import { App3836329771413873Component } from "./components/app-3836329771413873/app-3836329771413873.component";
import { App1414462218237591Component } from "./components/app-1414462218237591/app-1414462218237591.component";
import { App4126233266700721Component } from "./components/app-4126233266700721/app-4126233266700721.component";
import { App7232464615291443Component } from "./components/app-7232464615291443/app-7232464615291443.component";

// @ts-ignore
import html from './app-1878053103128359.component.html?raw';
// @ts-ignore
import style from './app-1878053103128359.component.scss?inline';

/**
 * COMPONENT: 'app-1878053103128359'
 */

export const App1878053103128359Component = new Component({
  name: 'app-1878053103128359',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7792364792833279Component,
App3836329771413873Component,
App1414462218237591Component,
App4126233266700721Component,
App7232464615291443Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
