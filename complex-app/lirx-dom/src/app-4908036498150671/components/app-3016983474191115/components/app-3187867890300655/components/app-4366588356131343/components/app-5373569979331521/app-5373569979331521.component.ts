import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1672609293588827Component } from "./components/app-1672609293588827/app-1672609293588827.component";
import { App6120329582789773Component } from "./components/app-6120329582789773/app-6120329582789773.component";
import { App8051090573126813Component } from "./components/app-8051090573126813/app-8051090573126813.component";
import { App1775828834072103Component } from "./components/app-1775828834072103/app-1775828834072103.component";
import { App8642606070381127Component } from "./components/app-8642606070381127/app-8642606070381127.component";

// @ts-ignore
import html from './app-5373569979331521.component.html?raw';
// @ts-ignore
import style from './app-5373569979331521.component.scss?inline';

/**
 * COMPONENT: 'app-5373569979331521'
 */

export const App5373569979331521Component = new Component({
  name: 'app-5373569979331521',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1672609293588827Component,
App6120329582789773Component,
App8051090573126813Component,
App1775828834072103Component,
App8642606070381127Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
