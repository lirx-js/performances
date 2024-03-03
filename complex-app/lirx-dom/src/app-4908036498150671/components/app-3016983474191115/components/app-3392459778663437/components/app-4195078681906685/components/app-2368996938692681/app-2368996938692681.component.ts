import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6020931710609359Component } from "./components/app-6020931710609359/app-6020931710609359.component";
import { App3694853533587359Component } from "./components/app-3694853533587359/app-3694853533587359.component";
import { App7347561694093251Component } from "./components/app-7347561694093251/app-7347561694093251.component";
import { App3326026865693579Component } from "./components/app-3326026865693579/app-3326026865693579.component";
import { App3218378802659677Component } from "./components/app-3218378802659677/app-3218378802659677.component";

// @ts-ignore
import html from './app-2368996938692681.component.html?raw';
// @ts-ignore
import style from './app-2368996938692681.component.scss?inline';

/**
 * COMPONENT: 'app-2368996938692681'
 */

export const App2368996938692681Component = new Component({
  name: 'app-2368996938692681',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6020931710609359Component,
App3694853533587359Component,
App7347561694093251Component,
App3326026865693579Component,
App3218378802659677Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
