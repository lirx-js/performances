import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7157856888397559Component } from "./components/app-7157856888397559/app-7157856888397559.component";
import { App8527251516169565Component } from "./components/app-8527251516169565/app-8527251516169565.component";
import { App4141635137403451Component } from "./components/app-4141635137403451/app-4141635137403451.component";
import { App2086094324230247Component } from "./components/app-2086094324230247/app-2086094324230247.component";
import { App8388969450732019Component } from "./components/app-8388969450732019/app-8388969450732019.component";

// @ts-ignore
import html from './app-8410688260803797.component.html?raw';
// @ts-ignore
import style from './app-8410688260803797.component.scss?inline';

/**
 * COMPONENT: 'app-8410688260803797'
 */

export const App8410688260803797Component = new Component({
  name: 'app-8410688260803797',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7157856888397559Component,
App8527251516169565Component,
App4141635137403451Component,
App2086094324230247Component,
App8388969450732019Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
