import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2008696544120041Component } from "./components/app-2008696544120041/app-2008696544120041.component";
import { App2268249396619231Component } from "./components/app-2268249396619231/app-2268249396619231.component";
import { App277717705700767Component } from "./components/app-277717705700767/app-277717705700767.component";
import { App2095257664164973Component } from "./components/app-2095257664164973/app-2095257664164973.component";
import { App6749342632465045Component } from "./components/app-6749342632465045/app-6749342632465045.component";

// @ts-ignore
import html from './app-6743563112379651.component.html?raw';
// @ts-ignore
import style from './app-6743563112379651.component.scss?inline';

/**
 * COMPONENT: 'app-6743563112379651'
 */

export const App6743563112379651Component = new Component({
  name: 'app-6743563112379651',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2008696544120041Component,
App2268249396619231Component,
App277717705700767Component,
App2095257664164973Component,
App6749342632465045Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
