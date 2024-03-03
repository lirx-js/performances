import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App325815189840773Component } from "./components/app-325815189840773/app-325815189840773.component";
import { App5631473732243761Component } from "./components/app-5631473732243761/app-5631473732243761.component";
import { App8558872692480579Component } from "./components/app-8558872692480579/app-8558872692480579.component";
import { App7927838213096923Component } from "./components/app-7927838213096923/app-7927838213096923.component";
import { App6710628352415085Component } from "./components/app-6710628352415085/app-6710628352415085.component";

// @ts-ignore
import html from './app-1836404190554385.component.html?raw';
// @ts-ignore
import style from './app-1836404190554385.component.scss?inline';

/**
 * COMPONENT: 'app-1836404190554385'
 */

export const App1836404190554385Component = new Component({
  name: 'app-1836404190554385',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App325815189840773Component,
App5631473732243761Component,
App8558872692480579Component,
App7927838213096923Component,
App6710628352415085Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
