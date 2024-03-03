import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App614484828887405Component } from "./components/app-614484828887405/app-614484828887405.component";
import { App1645579166367345Component } from "./components/app-1645579166367345/app-1645579166367345.component";
import { App7219363227042115Component } from "./components/app-7219363227042115/app-7219363227042115.component";
import { App1479369045857261Component } from "./components/app-1479369045857261/app-1479369045857261.component";
import { App6343725028094673Component } from "./components/app-6343725028094673/app-6343725028094673.component";

// @ts-ignore
import html from './app-2008696544120041.component.html?raw';
// @ts-ignore
import style from './app-2008696544120041.component.scss?inline';

/**
 * COMPONENT: 'app-2008696544120041'
 */

export const App2008696544120041Component = new Component({
  name: 'app-2008696544120041',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App614484828887405Component,
App1645579166367345Component,
App7219363227042115Component,
App1479369045857261Component,
App6343725028094673Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
