import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6549030963451367Component } from "./components/app-6549030963451367/app-6549030963451367.component";
import { App3018762467242815Component } from "./components/app-3018762467242815/app-3018762467242815.component";
import { App2411729008554955Component } from "./components/app-2411729008554955/app-2411729008554955.component";
import { App3768691507775379Component } from "./components/app-3768691507775379/app-3768691507775379.component";
import { App6015800189875677Component } from "./components/app-6015800189875677/app-6015800189875677.component";

// @ts-ignore
import html from './app-2743786843599167.component.html?raw';
// @ts-ignore
import style from './app-2743786843599167.component.scss?inline';

/**
 * COMPONENT: 'app-2743786843599167'
 */

export const App2743786843599167Component = new Component({
  name: 'app-2743786843599167',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6549030963451367Component,
App3018762467242815Component,
App2411729008554955Component,
App3768691507775379Component,
App6015800189875677Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
