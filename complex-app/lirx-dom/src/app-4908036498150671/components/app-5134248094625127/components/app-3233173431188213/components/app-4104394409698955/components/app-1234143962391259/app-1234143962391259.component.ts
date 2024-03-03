import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4090854628538179Component } from "./components/app-4090854628538179/app-4090854628538179.component";
import { App6069551128487327Component } from "./components/app-6069551128487327/app-6069551128487327.component";
import { App107027212009249Component } from "./components/app-107027212009249/app-107027212009249.component";
import { App3366495158097687Component } from "./components/app-3366495158097687/app-3366495158097687.component";
import { App8696383928507087Component } from "./components/app-8696383928507087/app-8696383928507087.component";

// @ts-ignore
import html from './app-1234143962391259.component.html?raw';
// @ts-ignore
import style from './app-1234143962391259.component.scss?inline';

/**
 * COMPONENT: 'app-1234143962391259'
 */

export const App1234143962391259Component = new Component({
  name: 'app-1234143962391259',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4090854628538179Component,
App6069551128487327Component,
App107027212009249Component,
App3366495158097687Component,
App8696383928507087Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
