import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5959867670112159Component } from "./components/app-5959867670112159/app-5959867670112159.component";
import { App6417072517962335Component } from "./components/app-6417072517962335/app-6417072517962335.component";
import { App8746377222727Component } from "./components/app-8746377222727/app-8746377222727.component";
import { App214057290099137Component } from "./components/app-214057290099137/app-214057290099137.component";
import { App8203869592934357Component } from "./components/app-8203869592934357/app-8203869592934357.component";

// @ts-ignore
import html from './app-8185199940134637.component.html?raw';
// @ts-ignore
import style from './app-8185199940134637.component.scss?inline';

/**
 * COMPONENT: 'app-8185199940134637'
 */

export const App8185199940134637Component = new Component({
  name: 'app-8185199940134637',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5959867670112159Component,
App6417072517962335Component,
App8746377222727Component,
App214057290099137Component,
App8203869592934357Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
