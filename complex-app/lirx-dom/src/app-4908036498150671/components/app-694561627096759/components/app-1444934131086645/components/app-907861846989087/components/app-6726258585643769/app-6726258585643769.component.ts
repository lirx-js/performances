import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7168036695181233Component } from "./components/app-7168036695181233/app-7168036695181233.component";
import { App5401830754728673Component } from "./components/app-5401830754728673/app-5401830754728673.component";
import { App5182867770234087Component } from "./components/app-5182867770234087/app-5182867770234087.component";
import { App6534002145955101Component } from "./components/app-6534002145955101/app-6534002145955101.component";
import { App578197333043823Component } from "./components/app-578197333043823/app-578197333043823.component";

// @ts-ignore
import html from './app-6726258585643769.component.html?raw';
// @ts-ignore
import style from './app-6726258585643769.component.scss?inline';

/**
 * COMPONENT: 'app-6726258585643769'
 */

export const App6726258585643769Component = new Component({
  name: 'app-6726258585643769',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7168036695181233Component,
App5401830754728673Component,
App5182867770234087Component,
App6534002145955101Component,
App578197333043823Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
