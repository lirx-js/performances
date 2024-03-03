import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5015240402334021Component } from "./components/app-5015240402334021/app-5015240402334021.component";
import { App6248065636480897Component } from "./components/app-6248065636480897/app-6248065636480897.component";
import { App8890441389578379Component } from "./components/app-8890441389578379/app-8890441389578379.component";
import { App5844319752191219Component } from "./components/app-5844319752191219/app-5844319752191219.component";
import { App1349054046453365Component } from "./components/app-1349054046453365/app-1349054046453365.component";

// @ts-ignore
import html from './app-6058418263904595.component.html?raw';
// @ts-ignore
import style from './app-6058418263904595.component.scss?inline';

/**
 * COMPONENT: 'app-6058418263904595'
 */

export const App6058418263904595Component = new Component({
  name: 'app-6058418263904595',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5015240402334021Component,
App6248065636480897Component,
App8890441389578379Component,
App5844319752191219Component,
App1349054046453365Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
