import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App121426702322037Component } from "./components/app-121426702322037/app-121426702322037.component";
import { App8168140470857381Component } from "./components/app-8168140470857381/app-8168140470857381.component";
import { App4799490004301995Component } from "./components/app-4799490004301995/app-4799490004301995.component";
import { App8230103883026105Component } from "./components/app-8230103883026105/app-8230103883026105.component";
import { App676353677331441Component } from "./components/app-676353677331441/app-676353677331441.component";

// @ts-ignore
import html from './app-4209336970708587.component.html?raw';
// @ts-ignore
import style from './app-4209336970708587.component.scss?inline';

/**
 * COMPONENT: 'app-4209336970708587'
 */

export const App4209336970708587Component = new Component({
  name: 'app-4209336970708587',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App121426702322037Component,
App8168140470857381Component,
App4799490004301995Component,
App8230103883026105Component,
App676353677331441Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
