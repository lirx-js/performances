import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2126424879605231Component } from "./components/app-2126424879605231/app-2126424879605231.component";
import { App6585946201850061Component } from "./components/app-6585946201850061/app-6585946201850061.component";
import { App5011891865563509Component } from "./components/app-5011891865563509/app-5011891865563509.component";
import { App3508077038563617Component } from "./components/app-3508077038563617/app-3508077038563617.component";
import { App442826031943903Component } from "./components/app-442826031943903/app-442826031943903.component";

// @ts-ignore
import html from './app-7608160565654365.component.html?raw';
// @ts-ignore
import style from './app-7608160565654365.component.scss?inline';

/**
 * COMPONENT: 'app-7608160565654365'
 */

export const App7608160565654365Component = new Component({
  name: 'app-7608160565654365',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2126424879605231Component,
App6585946201850061Component,
App5011891865563509Component,
App3508077038563617Component,
App442826031943903Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
