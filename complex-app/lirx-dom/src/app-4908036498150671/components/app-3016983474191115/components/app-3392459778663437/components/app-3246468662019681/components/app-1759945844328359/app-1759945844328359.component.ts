import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3176418439273135Component } from "./components/app-3176418439273135/app-3176418439273135.component";
import { App3071473111693997Component } from "./components/app-3071473111693997/app-3071473111693997.component";
import { App8827574024824791Component } from "./components/app-8827574024824791/app-8827574024824791.component";
import { App1308037157544601Component } from "./components/app-1308037157544601/app-1308037157544601.component";
import { App1901973560475055Component } from "./components/app-1901973560475055/app-1901973560475055.component";

// @ts-ignore
import html from './app-1759945844328359.component.html?raw';
// @ts-ignore
import style from './app-1759945844328359.component.scss?inline';

/**
 * COMPONENT: 'app-1759945844328359'
 */

export const App1759945844328359Component = new Component({
  name: 'app-1759945844328359',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3176418439273135Component,
App3071473111693997Component,
App8827574024824791Component,
App1308037157544601Component,
App1901973560475055Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
