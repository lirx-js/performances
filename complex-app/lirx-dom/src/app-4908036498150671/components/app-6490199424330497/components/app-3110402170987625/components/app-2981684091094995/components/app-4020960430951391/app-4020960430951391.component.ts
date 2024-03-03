import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1373034109012461Component } from "./components/app-1373034109012461/app-1373034109012461.component";
import { App770921131006913Component } from "./components/app-770921131006913/app-770921131006913.component";
import { App625869224260023Component } from "./components/app-625869224260023/app-625869224260023.component";
import { App2171309146876199Component } from "./components/app-2171309146876199/app-2171309146876199.component";
import { App694122817092125Component } from "./components/app-694122817092125/app-694122817092125.component";

// @ts-ignore
import html from './app-4020960430951391.component.html?raw';
// @ts-ignore
import style from './app-4020960430951391.component.scss?inline';

/**
 * COMPONENT: 'app-4020960430951391'
 */

export const App4020960430951391Component = new Component({
  name: 'app-4020960430951391',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1373034109012461Component,
App770921131006913Component,
App625869224260023Component,
App2171309146876199Component,
App694122817092125Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
