import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5893533736750065Component } from "./components/app-5893533736750065/app-5893533736750065.component";
import { App7556609135666617Component } from "./components/app-7556609135666617/app-7556609135666617.component";
import { App6031146838627227Component } from "./components/app-6031146838627227/app-6031146838627227.component";
import { App5002742979406923Component } from "./components/app-5002742979406923/app-5002742979406923.component";
import { App6845085419814861Component } from "./components/app-6845085419814861/app-6845085419814861.component";

// @ts-ignore
import html from './app-5211101413521491.component.html?raw';
// @ts-ignore
import style from './app-5211101413521491.component.scss?inline';

/**
 * COMPONENT: 'app-5211101413521491'
 */

export const App5211101413521491Component = new Component({
  name: 'app-5211101413521491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5893533736750065Component,
App7556609135666617Component,
App6031146838627227Component,
App5002742979406923Component,
App6845085419814861Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
