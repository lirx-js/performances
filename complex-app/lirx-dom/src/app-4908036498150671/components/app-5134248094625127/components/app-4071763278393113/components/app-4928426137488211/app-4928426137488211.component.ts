import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2566192496856239Component } from "./components/app-2566192496856239/app-2566192496856239.component";
import { App1540077232342427Component } from "./components/app-1540077232342427/app-1540077232342427.component";
import { App7089236830703107Component } from "./components/app-7089236830703107/app-7089236830703107.component";
import { App6845640358060031Component } from "./components/app-6845640358060031/app-6845640358060031.component";
import { App840041177200073Component } from "./components/app-840041177200073/app-840041177200073.component";

// @ts-ignore
import html from './app-4928426137488211.component.html?raw';
// @ts-ignore
import style from './app-4928426137488211.component.scss?inline';

/**
 * COMPONENT: 'app-4928426137488211'
 */

export const App4928426137488211Component = new Component({
  name: 'app-4928426137488211',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2566192496856239Component,
App1540077232342427Component,
App7089236830703107Component,
App6845640358060031Component,
App840041177200073Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
