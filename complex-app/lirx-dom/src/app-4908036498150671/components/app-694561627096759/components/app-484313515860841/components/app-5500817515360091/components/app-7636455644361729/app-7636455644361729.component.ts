import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1655288358090515Component } from "./components/app-1655288358090515/app-1655288358090515.component";
import { App5994565699387803Component } from "./components/app-5994565699387803/app-5994565699387803.component";
import { App5417391548191881Component } from "./components/app-5417391548191881/app-5417391548191881.component";
import { App5147785883147631Component } from "./components/app-5147785883147631/app-5147785883147631.component";
import { App7392295685679501Component } from "./components/app-7392295685679501/app-7392295685679501.component";

// @ts-ignore
import html from './app-7636455644361729.component.html?raw';
// @ts-ignore
import style from './app-7636455644361729.component.scss?inline';

/**
 * COMPONENT: 'app-7636455644361729'
 */

export const App7636455644361729Component = new Component({
  name: 'app-7636455644361729',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1655288358090515Component,
App5994565699387803Component,
App5417391548191881Component,
App5147785883147631Component,
App7392295685679501Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
