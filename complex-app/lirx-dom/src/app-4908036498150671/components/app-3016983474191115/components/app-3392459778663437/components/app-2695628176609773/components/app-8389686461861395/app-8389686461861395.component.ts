import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7301239479041197Component } from "./components/app-7301239479041197/app-7301239479041197.component";
import { App8061273262226031Component } from "./components/app-8061273262226031/app-8061273262226031.component";
import { App905991353288243Component } from "./components/app-905991353288243/app-905991353288243.component";
import { App9004527798949997Component } from "./components/app-9004527798949997/app-9004527798949997.component";
import { App2154064458218927Component } from "./components/app-2154064458218927/app-2154064458218927.component";

// @ts-ignore
import html from './app-8389686461861395.component.html?raw';
// @ts-ignore
import style from './app-8389686461861395.component.scss?inline';

/**
 * COMPONENT: 'app-8389686461861395'
 */

export const App8389686461861395Component = new Component({
  name: 'app-8389686461861395',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7301239479041197Component,
App8061273262226031Component,
App905991353288243Component,
App9004527798949997Component,
App2154064458218927Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
