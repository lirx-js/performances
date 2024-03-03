import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8752779902205621Component } from "./components/app-8752779902205621/app-8752779902205621.component";
import { App8055075927282561Component } from "./components/app-8055075927282561/app-8055075927282561.component";
import { App2867083194015207Component } from "./components/app-2867083194015207/app-2867083194015207.component";
import { App4388329991531887Component } from "./components/app-4388329991531887/app-4388329991531887.component";
import { App5625863517767075Component } from "./components/app-5625863517767075/app-5625863517767075.component";

// @ts-ignore
import html from './app-601367229553395.component.html?raw';
// @ts-ignore
import style from './app-601367229553395.component.scss?inline';

/**
 * COMPONENT: 'app-601367229553395'
 */

export const App601367229553395Component = new Component({
  name: 'app-601367229553395',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8752779902205621Component,
App8055075927282561Component,
App2867083194015207Component,
App4388329991531887Component,
App5625863517767075Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
