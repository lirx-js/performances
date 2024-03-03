import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8280704916326125Component } from "./components/app-8280704916326125/app-8280704916326125.component";
import { App1727548763973647Component } from "./components/app-1727548763973647/app-1727548763973647.component";
import { App375183449425919Component } from "./components/app-375183449425919/app-375183449425919.component";
import { App790505028975643Component } from "./components/app-790505028975643/app-790505028975643.component";
import { App723435736297567Component } from "./components/app-723435736297567/app-723435736297567.component";

// @ts-ignore
import html from './app-8580752307621861.component.html?raw';
// @ts-ignore
import style from './app-8580752307621861.component.scss?inline';

/**
 * COMPONENT: 'app-8580752307621861'
 */

export const App8580752307621861Component = new Component({
  name: 'app-8580752307621861',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8280704916326125Component,
App1727548763973647Component,
App375183449425919Component,
App790505028975643Component,
App723435736297567Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
