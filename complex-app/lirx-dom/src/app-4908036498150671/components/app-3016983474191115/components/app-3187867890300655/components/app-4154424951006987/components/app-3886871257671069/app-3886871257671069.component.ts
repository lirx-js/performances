import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8146760148456183Component } from "./components/app-8146760148456183/app-8146760148456183.component";
import { App8027070998629037Component } from "./components/app-8027070998629037/app-8027070998629037.component";
import { App4880450296646231Component } from "./components/app-4880450296646231/app-4880450296646231.component";
import { App5164639102317909Component } from "./components/app-5164639102317909/app-5164639102317909.component";
import { App3418343505067391Component } from "./components/app-3418343505067391/app-3418343505067391.component";

// @ts-ignore
import html from './app-3886871257671069.component.html?raw';
// @ts-ignore
import style from './app-3886871257671069.component.scss?inline';

/**
 * COMPONENT: 'app-3886871257671069'
 */

export const App3886871257671069Component = new Component({
  name: 'app-3886871257671069',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8146760148456183Component,
App8027070998629037Component,
App4880450296646231Component,
App5164639102317909Component,
App3418343505067391Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
