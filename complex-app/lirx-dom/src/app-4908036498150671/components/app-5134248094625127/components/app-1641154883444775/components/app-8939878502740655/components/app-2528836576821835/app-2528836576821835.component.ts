import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2857366483629525Component } from "./components/app-2857366483629525/app-2857366483629525.component";
import { App1320869089038077Component } from "./components/app-1320869089038077/app-1320869089038077.component";
import { App6265254311575961Component } from "./components/app-6265254311575961/app-6265254311575961.component";
import { App5252768637149697Component } from "./components/app-5252768637149697/app-5252768637149697.component";
import { App7572623204046071Component } from "./components/app-7572623204046071/app-7572623204046071.component";

// @ts-ignore
import html from './app-2528836576821835.component.html?raw';
// @ts-ignore
import style from './app-2528836576821835.component.scss?inline';

/**
 * COMPONENT: 'app-2528836576821835'
 */

export const App2528836576821835Component = new Component({
  name: 'app-2528836576821835',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2857366483629525Component,
App1320869089038077Component,
App6265254311575961Component,
App5252768637149697Component,
App7572623204046071Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
