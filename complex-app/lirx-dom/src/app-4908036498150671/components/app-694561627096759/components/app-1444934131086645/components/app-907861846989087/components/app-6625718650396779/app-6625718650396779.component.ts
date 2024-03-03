import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3254515243225971Component } from "./components/app-3254515243225971/app-3254515243225971.component";
import { App824103255729557Component } from "./components/app-824103255729557/app-824103255729557.component";
import { App7548014692253875Component } from "./components/app-7548014692253875/app-7548014692253875.component";
import { App3928874475512973Component } from "./components/app-3928874475512973/app-3928874475512973.component";
import { App299615516344055Component } from "./components/app-299615516344055/app-299615516344055.component";

// @ts-ignore
import html from './app-6625718650396779.component.html?raw';
// @ts-ignore
import style from './app-6625718650396779.component.scss?inline';

/**
 * COMPONENT: 'app-6625718650396779'
 */

export const App6625718650396779Component = new Component({
  name: 'app-6625718650396779',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3254515243225971Component,
App824103255729557Component,
App7548014692253875Component,
App3928874475512973Component,
App299615516344055Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
