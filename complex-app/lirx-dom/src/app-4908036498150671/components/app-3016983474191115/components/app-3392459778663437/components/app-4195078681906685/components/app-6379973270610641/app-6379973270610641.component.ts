import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3636808581845109Component } from "./components/app-3636808581845109/app-3636808581845109.component";
import { App5133896026476671Component } from "./components/app-5133896026476671/app-5133896026476671.component";
import { App6959743835448555Component } from "./components/app-6959743835448555/app-6959743835448555.component";
import { App1743595320542939Component } from "./components/app-1743595320542939/app-1743595320542939.component";
import { App5946191486400051Component } from "./components/app-5946191486400051/app-5946191486400051.component";

// @ts-ignore
import html from './app-6379973270610641.component.html?raw';
// @ts-ignore
import style from './app-6379973270610641.component.scss?inline';

/**
 * COMPONENT: 'app-6379973270610641'
 */

export const App6379973270610641Component = new Component({
  name: 'app-6379973270610641',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3636808581845109Component,
App5133896026476671Component,
App6959743835448555Component,
App1743595320542939Component,
App5946191486400051Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
