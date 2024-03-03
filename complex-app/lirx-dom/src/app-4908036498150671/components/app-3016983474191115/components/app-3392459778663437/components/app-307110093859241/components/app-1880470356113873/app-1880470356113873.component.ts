import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3813686830367985Component } from "./components/app-3813686830367985/app-3813686830367985.component";
import { App2366022431166021Component } from "./components/app-2366022431166021/app-2366022431166021.component";
import { App5061911689387745Component } from "./components/app-5061911689387745/app-5061911689387745.component";
import { App6941380155408587Component } from "./components/app-6941380155408587/app-6941380155408587.component";
import { App780138248586531Component } from "./components/app-780138248586531/app-780138248586531.component";

// @ts-ignore
import html from './app-1880470356113873.component.html?raw';
// @ts-ignore
import style from './app-1880470356113873.component.scss?inline';

/**
 * COMPONENT: 'app-1880470356113873'
 */

export const App1880470356113873Component = new Component({
  name: 'app-1880470356113873',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3813686830367985Component,
App2366022431166021Component,
App5061911689387745Component,
App6941380155408587Component,
App780138248586531Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
