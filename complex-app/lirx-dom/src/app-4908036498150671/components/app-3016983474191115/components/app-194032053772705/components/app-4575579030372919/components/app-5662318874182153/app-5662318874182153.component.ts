import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1332160261129763Component } from "./components/app-1332160261129763/app-1332160261129763.component";
import { App8701407727143383Component } from "./components/app-8701407727143383/app-8701407727143383.component";
import { App1072269509690355Component } from "./components/app-1072269509690355/app-1072269509690355.component";
import { App8092649383647869Component } from "./components/app-8092649383647869/app-8092649383647869.component";
import { App532617784381337Component } from "./components/app-532617784381337/app-532617784381337.component";

// @ts-ignore
import html from './app-5662318874182153.component.html?raw';
// @ts-ignore
import style from './app-5662318874182153.component.scss?inline';

/**
 * COMPONENT: 'app-5662318874182153'
 */

export const App5662318874182153Component = new Component({
  name: 'app-5662318874182153',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1332160261129763Component,
App8701407727143383Component,
App1072269509690355Component,
App8092649383647869Component,
App532617784381337Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
