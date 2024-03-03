import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1228443860466555Component } from "./components/app-1228443860466555/app-1228443860466555.component";
import { App3801696454541157Component } from "./components/app-3801696454541157/app-3801696454541157.component";
import { App8228290457148905Component } from "./components/app-8228290457148905/app-8228290457148905.component";
import { App7040850810059163Component } from "./components/app-7040850810059163/app-7040850810059163.component";
import { App3285170541536125Component } from "./components/app-3285170541536125/app-3285170541536125.component";

// @ts-ignore
import html from './app-8593159816391187.component.html?raw';
// @ts-ignore
import style from './app-8593159816391187.component.scss?inline';

/**
 * COMPONENT: 'app-8593159816391187'
 */

export const App8593159816391187Component = new Component({
  name: 'app-8593159816391187',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1228443860466555Component,
App3801696454541157Component,
App8228290457148905Component,
App7040850810059163Component,
App3285170541536125Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
