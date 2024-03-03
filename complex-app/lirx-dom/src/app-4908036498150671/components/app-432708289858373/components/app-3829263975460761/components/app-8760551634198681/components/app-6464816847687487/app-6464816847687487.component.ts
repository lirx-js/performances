import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8098658689704215Component } from "./components/app-8098658689704215/app-8098658689704215.component";
import { App6876653426357325Component } from "./components/app-6876653426357325/app-6876653426357325.component";
import { App1211210872453687Component } from "./components/app-1211210872453687/app-1211210872453687.component";
import { App7358644979954033Component } from "./components/app-7358644979954033/app-7358644979954033.component";
import { App2647558201384225Component } from "./components/app-2647558201384225/app-2647558201384225.component";

// @ts-ignore
import html from './app-6464816847687487.component.html?raw';
// @ts-ignore
import style from './app-6464816847687487.component.scss?inline';

/**
 * COMPONENT: 'app-6464816847687487'
 */

export const App6464816847687487Component = new Component({
  name: 'app-6464816847687487',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8098658689704215Component,
App6876653426357325Component,
App1211210872453687Component,
App7358644979954033Component,
App2647558201384225Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
