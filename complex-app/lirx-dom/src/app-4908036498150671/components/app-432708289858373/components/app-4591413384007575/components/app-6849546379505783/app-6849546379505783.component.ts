import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5126639400168011Component } from "./components/app-5126639400168011/app-5126639400168011.component";
import { App75958449315099Component } from "./components/app-75958449315099/app-75958449315099.component";
import { App7499084820678645Component } from "./components/app-7499084820678645/app-7499084820678645.component";
import { App5104594425229169Component } from "./components/app-5104594425229169/app-5104594425229169.component";
import { App8054561286240155Component } from "./components/app-8054561286240155/app-8054561286240155.component";

// @ts-ignore
import html from './app-6849546379505783.component.html?raw';
// @ts-ignore
import style from './app-6849546379505783.component.scss?inline';

/**
 * COMPONENT: 'app-6849546379505783'
 */

export const App6849546379505783Component = new Component({
  name: 'app-6849546379505783',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5126639400168011Component,
App75958449315099Component,
App7499084820678645Component,
App5104594425229169Component,
App8054561286240155Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
