import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App372511561701977Component } from "./components/app-372511561701977/app-372511561701977.component";
import { App193682995469085Component } from "./components/app-193682995469085/app-193682995469085.component";
import { App4142504387515341Component } from "./components/app-4142504387515341/app-4142504387515341.component";
import { App521743599462063Component } from "./components/app-521743599462063/app-521743599462063.component";
import { App8159922817689059Component } from "./components/app-8159922817689059/app-8159922817689059.component";

// @ts-ignore
import html from './app-2854688862386395.component.html?raw';
// @ts-ignore
import style from './app-2854688862386395.component.scss?inline';

/**
 * COMPONENT: 'app-2854688862386395'
 */

export const App2854688862386395Component = new Component({
  name: 'app-2854688862386395',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App372511561701977Component,
App193682995469085Component,
App4142504387515341Component,
App521743599462063Component,
App8159922817689059Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
