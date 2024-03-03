import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1125589665075671Component } from "./components/app-1125589665075671/app-1125589665075671.component";
import { App8675781067353141Component } from "./components/app-8675781067353141/app-8675781067353141.component";
import { App7492755389901779Component } from "./components/app-7492755389901779/app-7492755389901779.component";
import { App3987075398135701Component } from "./components/app-3987075398135701/app-3987075398135701.component";
import { App8592999393512235Component } from "./components/app-8592999393512235/app-8592999393512235.component";

// @ts-ignore
import html from './app-1540077232342427.component.html?raw';
// @ts-ignore
import style from './app-1540077232342427.component.scss?inline';

/**
 * COMPONENT: 'app-1540077232342427'
 */

export const App1540077232342427Component = new Component({
  name: 'app-1540077232342427',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1125589665075671Component,
App8675781067353141Component,
App7492755389901779Component,
App3987075398135701Component,
App8592999393512235Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
