import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5753297607362077Component } from "./components/app-5753297607362077/app-5753297607362077.component";
import { App1716295233168979Component } from "./components/app-1716295233168979/app-1716295233168979.component";
import { App4402013913212633Component } from "./components/app-4402013913212633/app-4402013913212633.component";
import { App1025109175204699Component } from "./components/app-1025109175204699/app-1025109175204699.component";
import { App685640472641247Component } from "./components/app-685640472641247/app-685640472641247.component";

// @ts-ignore
import html from './app-8358032876048159.component.html?raw';
// @ts-ignore
import style from './app-8358032876048159.component.scss?inline';

/**
 * COMPONENT: 'app-8358032876048159'
 */

export const App8358032876048159Component = new Component({
  name: 'app-8358032876048159',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5753297607362077Component,
App1716295233168979Component,
App4402013913212633Component,
App1025109175204699Component,
App685640472641247Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
