import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1479728233208959Component } from "./components/app-1479728233208959/app-1479728233208959.component";
import { App6030665893660765Component } from "./components/app-6030665893660765/app-6030665893660765.component";
import { App5846173282736949Component } from "./components/app-5846173282736949/app-5846173282736949.component";
import { App4996156680331859Component } from "./components/app-4996156680331859/app-4996156680331859.component";
import { App4291116128579463Component } from "./components/app-4291116128579463/app-4291116128579463.component";

// @ts-ignore
import html from './app-7039072624019839.component.html?raw';
// @ts-ignore
import style from './app-7039072624019839.component.scss?inline';

/**
 * COMPONENT: 'app-7039072624019839'
 */

export const App7039072624019839Component = new Component({
  name: 'app-7039072624019839',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1479728233208959Component,
App6030665893660765Component,
App5846173282736949Component,
App4996156680331859Component,
App4291116128579463Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
