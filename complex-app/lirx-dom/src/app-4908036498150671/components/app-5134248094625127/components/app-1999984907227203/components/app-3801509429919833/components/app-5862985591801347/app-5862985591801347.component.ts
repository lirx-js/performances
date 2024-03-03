import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2442970576769755Component } from "./components/app-2442970576769755/app-2442970576769755.component";
import { App8301500729082431Component } from "./components/app-8301500729082431/app-8301500729082431.component";
import { App5650128321017995Component } from "./components/app-5650128321017995/app-5650128321017995.component";
import { App3652258913497969Component } from "./components/app-3652258913497969/app-3652258913497969.component";
import { App555796452870551Component } from "./components/app-555796452870551/app-555796452870551.component";

// @ts-ignore
import html from './app-5862985591801347.component.html?raw';
// @ts-ignore
import style from './app-5862985591801347.component.scss?inline';

/**
 * COMPONENT: 'app-5862985591801347'
 */

export const App5862985591801347Component = new Component({
  name: 'app-5862985591801347',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2442970576769755Component,
App8301500729082431Component,
App5650128321017995Component,
App3652258913497969Component,
App555796452870551Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
