import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2181386724645161Component } from "./components/app-2181386724645161/app-2181386724645161.component";
import { App8915323695828499Component } from "./components/app-8915323695828499/app-8915323695828499.component";
import { App2759943362665623Component } from "./components/app-2759943362665623/app-2759943362665623.component";
import { App4308703446156765Component } from "./components/app-4308703446156765/app-4308703446156765.component";
import { App5315854862667763Component } from "./components/app-5315854862667763/app-5315854862667763.component";

// @ts-ignore
import html from './app-8702421947058669.component.html?raw';
// @ts-ignore
import style from './app-8702421947058669.component.scss?inline';

/**
 * COMPONENT: 'app-8702421947058669'
 */

export const App8702421947058669Component = new Component({
  name: 'app-8702421947058669',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2181386724645161Component,
App8915323695828499Component,
App2759943362665623Component,
App4308703446156765Component,
App5315854862667763Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
