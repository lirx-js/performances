import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8524370654361791Component } from "./components/app-8524370654361791/app-8524370654361791.component";
import { App724270056139949Component } from "./components/app-724270056139949/app-724270056139949.component";
import { App2297958530230117Component } from "./components/app-2297958530230117/app-2297958530230117.component";
import { App5702556893474703Component } from "./components/app-5702556893474703/app-5702556893474703.component";
import { App5808614997673705Component } from "./components/app-5808614997673705/app-5808614997673705.component";

// @ts-ignore
import html from './app-8284894014945787.component.html?raw';
// @ts-ignore
import style from './app-8284894014945787.component.scss?inline';

/**
 * COMPONENT: 'app-8284894014945787'
 */

export const App8284894014945787Component = new Component({
  name: 'app-8284894014945787',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8524370654361791Component,
App724270056139949Component,
App2297958530230117Component,
App5702556893474703Component,
App5808614997673705Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
