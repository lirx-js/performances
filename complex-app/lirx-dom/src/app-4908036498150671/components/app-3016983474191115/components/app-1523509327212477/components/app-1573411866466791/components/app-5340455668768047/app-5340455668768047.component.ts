import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6807612381757795Component } from "./components/app-6807612381757795/app-6807612381757795.component";
import { App1828768508430995Component } from "./components/app-1828768508430995/app-1828768508430995.component";
import { App4123040324231463Component } from "./components/app-4123040324231463/app-4123040324231463.component";
import { App1870557528180755Component } from "./components/app-1870557528180755/app-1870557528180755.component";
import { App6027415282419595Component } from "./components/app-6027415282419595/app-6027415282419595.component";

// @ts-ignore
import html from './app-5340455668768047.component.html?raw';
// @ts-ignore
import style from './app-5340455668768047.component.scss?inline';

/**
 * COMPONENT: 'app-5340455668768047'
 */

export const App5340455668768047Component = new Component({
  name: 'app-5340455668768047',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6807612381757795Component,
App1828768508430995Component,
App4123040324231463Component,
App1870557528180755Component,
App6027415282419595Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
