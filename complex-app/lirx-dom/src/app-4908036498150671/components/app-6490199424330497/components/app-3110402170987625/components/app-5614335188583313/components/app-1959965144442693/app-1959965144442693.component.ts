import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App626904582371737Component } from "./components/app-626904582371737/app-626904582371737.component";
import { App8595407261893231Component } from "./components/app-8595407261893231/app-8595407261893231.component";
import { App5301848773409883Component } from "./components/app-5301848773409883/app-5301848773409883.component";
import { App700883302358973Component } from "./components/app-700883302358973/app-700883302358973.component";
import { App1942465206265329Component } from "./components/app-1942465206265329/app-1942465206265329.component";

// @ts-ignore
import html from './app-1959965144442693.component.html?raw';
// @ts-ignore
import style from './app-1959965144442693.component.scss?inline';

/**
 * COMPONENT: 'app-1959965144442693'
 */

export const App1959965144442693Component = new Component({
  name: 'app-1959965144442693',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App626904582371737Component,
App8595407261893231Component,
App5301848773409883Component,
App700883302358973Component,
App1942465206265329Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
