import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6097458901715767Component } from "./components/app-6097458901715767/app-6097458901715767.component";
import { App6396317526770721Component } from "./components/app-6396317526770721/app-6396317526770721.component";
import { App6363795783306677Component } from "./components/app-6363795783306677/app-6363795783306677.component";
import { App4841061149093581Component } from "./components/app-4841061149093581/app-4841061149093581.component";
import { App8931799764084049Component } from "./components/app-8931799764084049/app-8931799764084049.component";

// @ts-ignore
import html from './app-8468533953477753.component.html?raw';
// @ts-ignore
import style from './app-8468533953477753.component.scss?inline';

/**
 * COMPONENT: 'app-8468533953477753'
 */

export const App8468533953477753Component = new Component({
  name: 'app-8468533953477753',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6097458901715767Component,
App6396317526770721Component,
App6363795783306677Component,
App4841061149093581Component,
App8931799764084049Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
