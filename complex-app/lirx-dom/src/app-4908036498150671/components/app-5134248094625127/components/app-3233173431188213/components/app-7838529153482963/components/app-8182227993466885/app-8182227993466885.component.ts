import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8989544561948001Component } from "./components/app-8989544561948001/app-8989544561948001.component";
import { App4237041540243695Component } from "./components/app-4237041540243695/app-4237041540243695.component";
import { App1067308605881465Component } from "./components/app-1067308605881465/app-1067308605881465.component";
import { App7309546496310887Component } from "./components/app-7309546496310887/app-7309546496310887.component";
import { App4463186867451901Component } from "./components/app-4463186867451901/app-4463186867451901.component";

// @ts-ignore
import html from './app-8182227993466885.component.html?raw';
// @ts-ignore
import style from './app-8182227993466885.component.scss?inline';

/**
 * COMPONENT: 'app-8182227993466885'
 */

export const App8182227993466885Component = new Component({
  name: 'app-8182227993466885',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8989544561948001Component,
App4237041540243695Component,
App1067308605881465Component,
App7309546496310887Component,
App4463186867451901Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
