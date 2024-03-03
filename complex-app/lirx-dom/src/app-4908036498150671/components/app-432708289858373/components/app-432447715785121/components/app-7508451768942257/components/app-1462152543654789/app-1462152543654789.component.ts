import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1312058255663637Component } from "./components/app-1312058255663637/app-1312058255663637.component";
import { App6587969502596775Component } from "./components/app-6587969502596775/app-6587969502596775.component";
import { App1471604742236791Component } from "./components/app-1471604742236791/app-1471604742236791.component";
import { App3841103068486047Component } from "./components/app-3841103068486047/app-3841103068486047.component";
import { App2789117451522359Component } from "./components/app-2789117451522359/app-2789117451522359.component";

// @ts-ignore
import html from './app-1462152543654789.component.html?raw';
// @ts-ignore
import style from './app-1462152543654789.component.scss?inline';

/**
 * COMPONENT: 'app-1462152543654789'
 */

export const App1462152543654789Component = new Component({
  name: 'app-1462152543654789',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1312058255663637Component,
App6587969502596775Component,
App1471604742236791Component,
App3841103068486047Component,
App2789117451522359Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
