import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1502081873395565Component } from "./components/app-1502081873395565/app-1502081873395565.component";
import { App1734992993121879Component } from "./components/app-1734992993121879/app-1734992993121879.component";
import { App6488695543002973Component } from "./components/app-6488695543002973/app-6488695543002973.component";
import { App6148816008479229Component } from "./components/app-6148816008479229/app-6148816008479229.component";
import { App8923552531981799Component } from "./components/app-8923552531981799/app-8923552531981799.component";

// @ts-ignore
import html from './app-2245955473048381.component.html?raw';
// @ts-ignore
import style from './app-2245955473048381.component.scss?inline';

/**
 * COMPONENT: 'app-2245955473048381'
 */

export const App2245955473048381Component = new Component({
  name: 'app-2245955473048381',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1502081873395565Component,
App1734992993121879Component,
App6488695543002973Component,
App6148816008479229Component,
App8923552531981799Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
