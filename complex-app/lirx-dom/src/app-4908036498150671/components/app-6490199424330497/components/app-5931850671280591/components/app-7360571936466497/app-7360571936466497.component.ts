import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4197188098551299Component } from "./components/app-4197188098551299/app-4197188098551299.component";
import { App1325326673312495Component } from "./components/app-1325326673312495/app-1325326673312495.component";
import { App8776093967627661Component } from "./components/app-8776093967627661/app-8776093967627661.component";
import { App6698096962145549Component } from "./components/app-6698096962145549/app-6698096962145549.component";
import { App730862712621371Component } from "./components/app-730862712621371/app-730862712621371.component";

// @ts-ignore
import html from './app-7360571936466497.component.html?raw';
// @ts-ignore
import style from './app-7360571936466497.component.scss?inline';

/**
 * COMPONENT: 'app-7360571936466497'
 */

export const App7360571936466497Component = new Component({
  name: 'app-7360571936466497',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4197188098551299Component,
App1325326673312495Component,
App8776093967627661Component,
App6698096962145549Component,
App730862712621371Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
