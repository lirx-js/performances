import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6371216555581095Component } from "./components/app-6371216555581095/app-6371216555581095.component";
import { App7314597156045407Component } from "./components/app-7314597156045407/app-7314597156045407.component";
import { App928515426155197Component } from "./components/app-928515426155197/app-928515426155197.component";
import { App7771096968743101Component } from "./components/app-7771096968743101/app-7771096968743101.component";
import { App5313971178268869Component } from "./components/app-5313971178268869/app-5313971178268869.component";

// @ts-ignore
import html from './app-504309414739843.component.html?raw';
// @ts-ignore
import style from './app-504309414739843.component.scss?inline';

/**
 * COMPONENT: 'app-504309414739843'
 */

export const App504309414739843Component = new Component({
  name: 'app-504309414739843',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6371216555581095Component,
App7314597156045407Component,
App928515426155197Component,
App7771096968743101Component,
App5313971178268869Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
