import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5427630414149495Component } from "./components/app-5427630414149495/app-5427630414149495.component";
import { App7039072624019839Component } from "./components/app-7039072624019839/app-7039072624019839.component";
import { App8702421947058669Component } from "./components/app-8702421947058669/app-8702421947058669.component";
import { App2743786843599167Component } from "./components/app-2743786843599167/app-2743786843599167.component";
import { App3882249593046429Component } from "./components/app-3882249593046429/app-3882249593046429.component";

// @ts-ignore
import html from './app-6675050230671933.component.html?raw';
// @ts-ignore
import style from './app-6675050230671933.component.scss?inline';

/**
 * COMPONENT: 'app-6675050230671933'
 */

export const App6675050230671933Component = new Component({
  name: 'app-6675050230671933',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5427630414149495Component,
App7039072624019839Component,
App8702421947058669Component,
App2743786843599167Component,
App3882249593046429Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
