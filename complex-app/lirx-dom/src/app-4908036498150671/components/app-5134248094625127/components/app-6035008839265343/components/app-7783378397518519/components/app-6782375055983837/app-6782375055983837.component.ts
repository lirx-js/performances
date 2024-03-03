import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1266175900330205Component } from "./components/app-1266175900330205/app-1266175900330205.component";
import { App197220496873967Component } from "./components/app-197220496873967/app-197220496873967.component";
import { App3699923532091135Component } from "./components/app-3699923532091135/app-3699923532091135.component";
import { App7574491294942231Component } from "./components/app-7574491294942231/app-7574491294942231.component";
import { App2283847779723459Component } from "./components/app-2283847779723459/app-2283847779723459.component";

// @ts-ignore
import html from './app-6782375055983837.component.html?raw';
// @ts-ignore
import style from './app-6782375055983837.component.scss?inline';

/**
 * COMPONENT: 'app-6782375055983837'
 */

export const App6782375055983837Component = new Component({
  name: 'app-6782375055983837',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1266175900330205Component,
App197220496873967Component,
App3699923532091135Component,
App7574491294942231Component,
App2283847779723459Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
