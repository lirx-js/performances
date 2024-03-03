import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7935676191741681Component } from "./components/app-7935676191741681/app-7935676191741681.component";
import { App8368972102981153Component } from "./components/app-8368972102981153/app-8368972102981153.component";
import { App6989736929377025Component } from "./components/app-6989736929377025/app-6989736929377025.component";
import { App1723842148102231Component } from "./components/app-1723842148102231/app-1723842148102231.component";
import { App174166236542935Component } from "./components/app-174166236542935/app-174166236542935.component";

// @ts-ignore
import html from './app-5946511867879877.component.html?raw';
// @ts-ignore
import style from './app-5946511867879877.component.scss?inline';

/**
 * COMPONENT: 'app-5946511867879877'
 */

export const App5946511867879877Component = new Component({
  name: 'app-5946511867879877',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7935676191741681Component,
App8368972102981153Component,
App6989736929377025Component,
App1723842148102231Component,
App174166236542935Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
