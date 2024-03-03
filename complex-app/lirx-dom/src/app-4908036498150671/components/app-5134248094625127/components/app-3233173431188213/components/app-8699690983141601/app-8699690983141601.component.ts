import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4609752604313485Component } from "./components/app-4609752604313485/app-4609752604313485.component";
import { App3517395260139363Component } from "./components/app-3517395260139363/app-3517395260139363.component";
import { App4208338384938169Component } from "./components/app-4208338384938169/app-4208338384938169.component";
import { App5950966929426777Component } from "./components/app-5950966929426777/app-5950966929426777.component";
import { App2542357877527149Component } from "./components/app-2542357877527149/app-2542357877527149.component";

// @ts-ignore
import html from './app-8699690983141601.component.html?raw';
// @ts-ignore
import style from './app-8699690983141601.component.scss?inline';

/**
 * COMPONENT: 'app-8699690983141601'
 */

export const App8699690983141601Component = new Component({
  name: 'app-8699690983141601',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4609752604313485Component,
App3517395260139363Component,
App4208338384938169Component,
App5950966929426777Component,
App2542357877527149Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
