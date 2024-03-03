import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2982986900941725Component } from "./components/app-2982986900941725/app-2982986900941725.component";
import { App2118974236855479Component } from "./components/app-2118974236855479/app-2118974236855479.component";
import { App2285644323880135Component } from "./components/app-2285644323880135/app-2285644323880135.component";
import { App2993614929437015Component } from "./components/app-2993614929437015/app-2993614929437015.component";
import { App462586335312051Component } from "./components/app-462586335312051/app-462586335312051.component";

// @ts-ignore
import html from './app-7961279533156511.component.html?raw';
// @ts-ignore
import style from './app-7961279533156511.component.scss?inline';

/**
 * COMPONENT: 'app-7961279533156511'
 */

export const App7961279533156511Component = new Component({
  name: 'app-7961279533156511',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2982986900941725Component,
App2118974236855479Component,
App2285644323880135Component,
App2993614929437015Component,
App462586335312051Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
