import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App550221374308873Component } from "./components/app-550221374308873/app-550221374308873.component";
import { App931369029208729Component } from "./components/app-931369029208729/app-931369029208729.component";
import { App1546139371418991Component } from "./components/app-1546139371418991/app-1546139371418991.component";
import { App6571351013031477Component } from "./components/app-6571351013031477/app-6571351013031477.component";
import { App8271959348205459Component } from "./components/app-8271959348205459/app-8271959348205459.component";

// @ts-ignore
import html from './app-3613569546160507.component.html?raw';
// @ts-ignore
import style from './app-3613569546160507.component.scss?inline';

/**
 * COMPONENT: 'app-3613569546160507'
 */

export const App3613569546160507Component = new Component({
  name: 'app-3613569546160507',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App550221374308873Component,
App931369029208729Component,
App1546139371418991Component,
App6571351013031477Component,
App8271959348205459Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
