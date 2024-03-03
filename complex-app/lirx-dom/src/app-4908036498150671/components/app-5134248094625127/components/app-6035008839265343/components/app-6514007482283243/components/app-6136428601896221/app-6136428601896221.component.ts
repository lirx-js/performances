import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7773423294356949Component } from "./components/app-7773423294356949/app-7773423294356949.component";
import { App5390396472214489Component } from "./components/app-5390396472214489/app-5390396472214489.component";
import { App2261116694965895Component } from "./components/app-2261116694965895/app-2261116694965895.component";
import { App5139596553299063Component } from "./components/app-5139596553299063/app-5139596553299063.component";
import { App638919068489731Component } from "./components/app-638919068489731/app-638919068489731.component";

// @ts-ignore
import html from './app-6136428601896221.component.html?raw';
// @ts-ignore
import style from './app-6136428601896221.component.scss?inline';

/**
 * COMPONENT: 'app-6136428601896221'
 */

export const App6136428601896221Component = new Component({
  name: 'app-6136428601896221',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7773423294356949Component,
App5390396472214489Component,
App2261116694965895Component,
App5139596553299063Component,
App638919068489731Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
