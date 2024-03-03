import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App812421985645907Component } from "./components/app-812421985645907/app-812421985645907.component";
import { App4176243405943055Component } from "./components/app-4176243405943055/app-4176243405943055.component";
import { App5287388175203421Component } from "./components/app-5287388175203421/app-5287388175203421.component";
import { App1606037309519977Component } from "./components/app-1606037309519977/app-1606037309519977.component";
import { App6200005458478949Component } from "./components/app-6200005458478949/app-6200005458478949.component";

// @ts-ignore
import html from './app-5751347844137289.component.html?raw';
// @ts-ignore
import style from './app-5751347844137289.component.scss?inline';

/**
 * COMPONENT: 'app-5751347844137289'
 */

export const App5751347844137289Component = new Component({
  name: 'app-5751347844137289',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App812421985645907Component,
App4176243405943055Component,
App5287388175203421Component,
App1606037309519977Component,
App6200005458478949Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
