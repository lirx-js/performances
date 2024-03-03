import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5929696622747225Component } from "./components/app-5929696622747225/app-5929696622747225.component";
import { App1413324346229417Component } from "./components/app-1413324346229417/app-1413324346229417.component";
import { App3658382172373665Component } from "./components/app-3658382172373665/app-3658382172373665.component";
import { App2356108518353381Component } from "./components/app-2356108518353381/app-2356108518353381.component";
import { App3768950093814005Component } from "./components/app-3768950093814005/app-3768950093814005.component";

// @ts-ignore
import html from './app-3336330972359709.component.html?raw';
// @ts-ignore
import style from './app-3336330972359709.component.scss?inline';

/**
 * COMPONENT: 'app-3336330972359709'
 */

export const App3336330972359709Component = new Component({
  name: 'app-3336330972359709',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5929696622747225Component,
App1413324346229417Component,
App3658382172373665Component,
App2356108518353381Component,
App3768950093814005Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
