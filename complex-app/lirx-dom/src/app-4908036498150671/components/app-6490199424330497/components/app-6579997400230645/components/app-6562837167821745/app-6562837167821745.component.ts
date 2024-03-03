import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4846006350802871Component } from "./components/app-4846006350802871/app-4846006350802871.component";
import { App2768915566473669Component } from "./components/app-2768915566473669/app-2768915566473669.component";
import { App7779042133403559Component } from "./components/app-7779042133403559/app-7779042133403559.component";
import { App7863392350302819Component } from "./components/app-7863392350302819/app-7863392350302819.component";
import { App3261168070215377Component } from "./components/app-3261168070215377/app-3261168070215377.component";

// @ts-ignore
import html from './app-6562837167821745.component.html?raw';
// @ts-ignore
import style from './app-6562837167821745.component.scss?inline';

/**
 * COMPONENT: 'app-6562837167821745'
 */

export const App6562837167821745Component = new Component({
  name: 'app-6562837167821745',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4846006350802871Component,
App2768915566473669Component,
App7779042133403559Component,
App7863392350302819Component,
App3261168070215377Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
