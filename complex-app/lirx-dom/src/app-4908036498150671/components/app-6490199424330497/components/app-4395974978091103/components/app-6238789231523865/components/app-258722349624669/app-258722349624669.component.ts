import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5220570802352861Component } from "./components/app-5220570802352861/app-5220570802352861.component";
import { App1182986140217843Component } from "./components/app-1182986140217843/app-1182986140217843.component";
import { App4640297925955269Component } from "./components/app-4640297925955269/app-4640297925955269.component";
import { App7890540247886499Component } from "./components/app-7890540247886499/app-7890540247886499.component";
import { App8952622693539213Component } from "./components/app-8952622693539213/app-8952622693539213.component";

// @ts-ignore
import html from './app-258722349624669.component.html?raw';
// @ts-ignore
import style from './app-258722349624669.component.scss?inline';

/**
 * COMPONENT: 'app-258722349624669'
 */

export const App258722349624669Component = new Component({
  name: 'app-258722349624669',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5220570802352861Component,
App1182986140217843Component,
App4640297925955269Component,
App7890540247886499Component,
App8952622693539213Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
