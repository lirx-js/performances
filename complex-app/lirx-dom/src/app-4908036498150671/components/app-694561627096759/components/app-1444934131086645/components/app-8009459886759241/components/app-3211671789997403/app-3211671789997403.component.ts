import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2994940186824113Component } from "./components/app-2994940186824113/app-2994940186824113.component";
import { App2563864917023205Component } from "./components/app-2563864917023205/app-2563864917023205.component";
import { App7314946514332611Component } from "./components/app-7314946514332611/app-7314946514332611.component";
import { App5098556850717609Component } from "./components/app-5098556850717609/app-5098556850717609.component";
import { App6287149144980987Component } from "./components/app-6287149144980987/app-6287149144980987.component";

// @ts-ignore
import html from './app-3211671789997403.component.html?raw';
// @ts-ignore
import style from './app-3211671789997403.component.scss?inline';

/**
 * COMPONENT: 'app-3211671789997403'
 */

export const App3211671789997403Component = new Component({
  name: 'app-3211671789997403',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2994940186824113Component,
App2563864917023205Component,
App7314946514332611Component,
App5098556850717609Component,
App6287149144980987Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
