import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6545113685761715Component } from "./components/app-6545113685761715/app-6545113685761715.component";
import { App908350331803145Component } from "./components/app-908350331803145/app-908350331803145.component";
import { App7633639165177793Component } from "./components/app-7633639165177793/app-7633639165177793.component";
import { App4370499383867869Component } from "./components/app-4370499383867869/app-4370499383867869.component";
import { App138554198750637Component } from "./components/app-138554198750637/app-138554198750637.component";

// @ts-ignore
import html from './app-4810865508212879.component.html?raw';
// @ts-ignore
import style from './app-4810865508212879.component.scss?inline';

/**
 * COMPONENT: 'app-4810865508212879'
 */

export const App4810865508212879Component = new Component({
  name: 'app-4810865508212879',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6545113685761715Component,
App908350331803145Component,
App7633639165177793Component,
App4370499383867869Component,
App138554198750637Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
