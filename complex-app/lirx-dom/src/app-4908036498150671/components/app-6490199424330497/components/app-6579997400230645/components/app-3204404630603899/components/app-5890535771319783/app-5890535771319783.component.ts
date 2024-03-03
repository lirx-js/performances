import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2767314679977085Component } from "./components/app-2767314679977085/app-2767314679977085.component";
import { App6970873855904257Component } from "./components/app-6970873855904257/app-6970873855904257.component";
import { App3592489888442153Component } from "./components/app-3592489888442153/app-3592489888442153.component";
import { App7703469963989721Component } from "./components/app-7703469963989721/app-7703469963989721.component";
import { App2708030500619169Component } from "./components/app-2708030500619169/app-2708030500619169.component";

// @ts-ignore
import html from './app-5890535771319783.component.html?raw';
// @ts-ignore
import style from './app-5890535771319783.component.scss?inline';

/**
 * COMPONENT: 'app-5890535771319783'
 */

export const App5890535771319783Component = new Component({
  name: 'app-5890535771319783',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2767314679977085Component,
App6970873855904257Component,
App3592489888442153Component,
App7703469963989721Component,
App2708030500619169Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
