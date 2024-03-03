import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4742340274123377Component } from "./components/app-4742340274123377/app-4742340274123377.component";
import { App4152330758046015Component } from "./components/app-4152330758046015/app-4152330758046015.component";
import { App2982387323748259Component } from "./components/app-2982387323748259/app-2982387323748259.component";
import { App1760924850649895Component } from "./components/app-1760924850649895/app-1760924850649895.component";
import { App4553558584797169Component } from "./components/app-4553558584797169/app-4553558584797169.component";

// @ts-ignore
import html from './app-6175706706628701.component.html?raw';
// @ts-ignore
import style from './app-6175706706628701.component.scss?inline';

/**
 * COMPONENT: 'app-6175706706628701'
 */

export const App6175706706628701Component = new Component({
  name: 'app-6175706706628701',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4742340274123377Component,
App4152330758046015Component,
App2982387323748259Component,
App1760924850649895Component,
App4553558584797169Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
