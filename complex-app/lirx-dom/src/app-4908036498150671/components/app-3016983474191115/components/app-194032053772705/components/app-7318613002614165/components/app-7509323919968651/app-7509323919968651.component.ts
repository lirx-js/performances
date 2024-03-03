import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3650113059742175Component } from "./components/app-3650113059742175/app-3650113059742175.component";
import { App215587716126125Component } from "./components/app-215587716126125/app-215587716126125.component";
import { App5546045082672333Component } from "./components/app-5546045082672333/app-5546045082672333.component";
import { App5649599155177535Component } from "./components/app-5649599155177535/app-5649599155177535.component";
import { App6554559822304907Component } from "./components/app-6554559822304907/app-6554559822304907.component";

// @ts-ignore
import html from './app-7509323919968651.component.html?raw';
// @ts-ignore
import style from './app-7509323919968651.component.scss?inline';

/**
 * COMPONENT: 'app-7509323919968651'
 */

export const App7509323919968651Component = new Component({
  name: 'app-7509323919968651',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3650113059742175Component,
App215587716126125Component,
App5546045082672333Component,
App5649599155177535Component,
App6554559822304907Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
