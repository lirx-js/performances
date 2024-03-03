import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7474648597045293Component } from "./components/app-7474648597045293/app-7474648597045293.component";
import { App117499541065129Component } from "./components/app-117499541065129/app-117499541065129.component";
import { App7404140314878949Component } from "./components/app-7404140314878949/app-7404140314878949.component";
import { App2366989303032349Component } from "./components/app-2366989303032349/app-2366989303032349.component";
import { App7378263385137991Component } from "./components/app-7378263385137991/app-7378263385137991.component";

// @ts-ignore
import html from './app-1637117998641651.component.html?raw';
// @ts-ignore
import style from './app-1637117998641651.component.scss?inline';

/**
 * COMPONENT: 'app-1637117998641651'
 */

export const App1637117998641651Component = new Component({
  name: 'app-1637117998641651',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7474648597045293Component,
App117499541065129Component,
App7404140314878949Component,
App2366989303032349Component,
App7378263385137991Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
