import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5136243967217471Component } from "./components/app-5136243967217471/app-5136243967217471.component";
import { App8499419457501705Component } from "./components/app-8499419457501705/app-8499419457501705.component";
import { App2590707544175207Component } from "./components/app-2590707544175207/app-2590707544175207.component";
import { App224046693989489Component } from "./components/app-224046693989489/app-224046693989489.component";
import { App5193960709962361Component } from "./components/app-5193960709962361/app-5193960709962361.component";

// @ts-ignore
import html from './app-8260818911423121.component.html?raw';
// @ts-ignore
import style from './app-8260818911423121.component.scss?inline';

/**
 * COMPONENT: 'app-8260818911423121'
 */

export const App8260818911423121Component = new Component({
  name: 'app-8260818911423121',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5136243967217471Component,
App8499419457501705Component,
App2590707544175207Component,
App224046693989489Component,
App5193960709962361Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
