import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App178410717306387Component } from "./components/app-178410717306387/app-178410717306387.component";
import { App8529096789211163Component } from "./components/app-8529096789211163/app-8529096789211163.component";
import { App5643193152086171Component } from "./components/app-5643193152086171/app-5643193152086171.component";
import { App3128406979395303Component } from "./components/app-3128406979395303/app-3128406979395303.component";
import { App2416905588453079Component } from "./components/app-2416905588453079/app-2416905588453079.component";

// @ts-ignore
import html from './app-2601460938311063.component.html?raw';
// @ts-ignore
import style from './app-2601460938311063.component.scss?inline';

/**
 * COMPONENT: 'app-2601460938311063'
 */

export const App2601460938311063Component = new Component({
  name: 'app-2601460938311063',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App178410717306387Component,
App8529096789211163Component,
App5643193152086171Component,
App3128406979395303Component,
App2416905588453079Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
