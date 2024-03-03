import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App839316361541467Component } from "./components/app-839316361541467/app-839316361541467.component";
import { App642028523765325Component } from "./components/app-642028523765325/app-642028523765325.component";
import { App8494236001655097Component } from "./components/app-8494236001655097/app-8494236001655097.component";
import { App6621272307474751Component } from "./components/app-6621272307474751/app-6621272307474751.component";
import { App5224672933805243Component } from "./components/app-5224672933805243/app-5224672933805243.component";

// @ts-ignore
import html from './app-6309748709084173.component.html?raw';
// @ts-ignore
import style from './app-6309748709084173.component.scss?inline';

/**
 * COMPONENT: 'app-6309748709084173'
 */

export const App6309748709084173Component = new Component({
  name: 'app-6309748709084173',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App839316361541467Component,
App642028523765325Component,
App8494236001655097Component,
App6621272307474751Component,
App5224672933805243Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
