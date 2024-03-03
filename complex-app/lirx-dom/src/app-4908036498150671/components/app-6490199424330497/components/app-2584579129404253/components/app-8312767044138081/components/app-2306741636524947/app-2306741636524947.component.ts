import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8291490771651581Component } from "./components/app-8291490771651581/app-8291490771651581.component";
import { App5562775288899153Component } from "./components/app-5562775288899153/app-5562775288899153.component";
import { App3875838733226475Component } from "./components/app-3875838733226475/app-3875838733226475.component";
import { App660091254346213Component } from "./components/app-660091254346213/app-660091254346213.component";
import { App3987960943652453Component } from "./components/app-3987960943652453/app-3987960943652453.component";

// @ts-ignore
import html from './app-2306741636524947.component.html?raw';
// @ts-ignore
import style from './app-2306741636524947.component.scss?inline';

/**
 * COMPONENT: 'app-2306741636524947'
 */

export const App2306741636524947Component = new Component({
  name: 'app-2306741636524947',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8291490771651581Component,
App5562775288899153Component,
App3875838733226475Component,
App660091254346213Component,
App3987960943652453Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
