import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1714323461660037Component } from "./components/app-1714323461660037/app-1714323461660037.component";
import { App1085217594975627Component } from "./components/app-1085217594975627/app-1085217594975627.component";
import { App4303746562511907Component } from "./components/app-4303746562511907/app-4303746562511907.component";
import { App1010103797732689Component } from "./components/app-1010103797732689/app-1010103797732689.component";
import { App2184632266979429Component } from "./components/app-2184632266979429/app-2184632266979429.component";

// @ts-ignore
import html from './app-4905529568290165.component.html?raw';
// @ts-ignore
import style from './app-4905529568290165.component.scss?inline';

/**
 * COMPONENT: 'app-4905529568290165'
 */

export const App4905529568290165Component = new Component({
  name: 'app-4905529568290165',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1714323461660037Component,
App1085217594975627Component,
App4303746562511907Component,
App1010103797732689Component,
App2184632266979429Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
