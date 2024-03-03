import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4468246079681473Component } from "./components/app-4468246079681473/app-4468246079681473.component";
import { App4027801146078473Component } from "./components/app-4027801146078473/app-4027801146078473.component";
import { App1468118762211755Component } from "./components/app-1468118762211755/app-1468118762211755.component";
import { App7499286228626749Component } from "./components/app-7499286228626749/app-7499286228626749.component";
import { App1065794938459577Component } from "./components/app-1065794938459577/app-1065794938459577.component";

// @ts-ignore
import html from './app-1640765946521195.component.html?raw';
// @ts-ignore
import style from './app-1640765946521195.component.scss?inline';

/**
 * COMPONENT: 'app-1640765946521195'
 */

export const App1640765946521195Component = new Component({
  name: 'app-1640765946521195',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4468246079681473Component,
App4027801146078473Component,
App1468118762211755Component,
App7499286228626749Component,
App1065794938459577Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
