import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App924083094756809Component } from "./components/app-924083094756809/app-924083094756809.component";
import { App5391523564789525Component } from "./components/app-5391523564789525/app-5391523564789525.component";
import { App5886062778729855Component } from "./components/app-5886062778729855/app-5886062778729855.component";
import { App4357566736624055Component } from "./components/app-4357566736624055/app-4357566736624055.component";
import { App8394197035916987Component } from "./components/app-8394197035916987/app-8394197035916987.component";

// @ts-ignore
import html from './app-879276885166219.component.html?raw';
// @ts-ignore
import style from './app-879276885166219.component.scss?inline';

/**
 * COMPONENT: 'app-879276885166219'
 */

export const App879276885166219Component = new Component({
  name: 'app-879276885166219',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App924083094756809Component,
App5391523564789525Component,
App5886062778729855Component,
App4357566736624055Component,
App8394197035916987Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
