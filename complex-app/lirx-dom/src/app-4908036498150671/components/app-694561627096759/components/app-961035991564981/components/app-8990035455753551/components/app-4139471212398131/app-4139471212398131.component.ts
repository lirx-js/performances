import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8908042240111781Component } from "./components/app-8908042240111781/app-8908042240111781.component";
import { App2156074345165903Component } from "./components/app-2156074345165903/app-2156074345165903.component";
import { App777374947627859Component } from "./components/app-777374947627859/app-777374947627859.component";
import { App3727886937428217Component } from "./components/app-3727886937428217/app-3727886937428217.component";
import { App6119938436030551Component } from "./components/app-6119938436030551/app-6119938436030551.component";

// @ts-ignore
import html from './app-4139471212398131.component.html?raw';
// @ts-ignore
import style from './app-4139471212398131.component.scss?inline';

/**
 * COMPONENT: 'app-4139471212398131'
 */

export const App4139471212398131Component = new Component({
  name: 'app-4139471212398131',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8908042240111781Component,
App2156074345165903Component,
App777374947627859Component,
App3727886937428217Component,
App6119938436030551Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
