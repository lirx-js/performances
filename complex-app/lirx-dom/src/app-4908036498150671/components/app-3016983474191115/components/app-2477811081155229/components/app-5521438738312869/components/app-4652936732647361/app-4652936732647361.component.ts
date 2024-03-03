import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4869362431495019Component } from "./components/app-4869362431495019/app-4869362431495019.component";
import { App3908624658418659Component } from "./components/app-3908624658418659/app-3908624658418659.component";
import { App1889696291595363Component } from "./components/app-1889696291595363/app-1889696291595363.component";
import { App1503935882282677Component } from "./components/app-1503935882282677/app-1503935882282677.component";
import { App1635376651061929Component } from "./components/app-1635376651061929/app-1635376651061929.component";

// @ts-ignore
import html from './app-4652936732647361.component.html?raw';
// @ts-ignore
import style from './app-4652936732647361.component.scss?inline';

/**
 * COMPONENT: 'app-4652936732647361'
 */

export const App4652936732647361Component = new Component({
  name: 'app-4652936732647361',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4869362431495019Component,
App3908624658418659Component,
App1889696291595363Component,
App1503935882282677Component,
App1635376651061929Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
