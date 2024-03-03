import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5510725265272475Component } from "./components/app-5510725265272475/app-5510725265272475.component";
import { App4848037972221005Component } from "./components/app-4848037972221005/app-4848037972221005.component";
import { App1926826631206593Component } from "./components/app-1926826631206593/app-1926826631206593.component";
import { App6155607333571807Component } from "./components/app-6155607333571807/app-6155607333571807.component";
import { App857514381656275Component } from "./components/app-857514381656275/app-857514381656275.component";

// @ts-ignore
import html from './app-1181148416047531.component.html?raw';
// @ts-ignore
import style from './app-1181148416047531.component.scss?inline';

/**
 * COMPONENT: 'app-1181148416047531'
 */

export const App1181148416047531Component = new Component({
  name: 'app-1181148416047531',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5510725265272475Component,
App4848037972221005Component,
App1926826631206593Component,
App6155607333571807Component,
App857514381656275Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
