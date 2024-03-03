import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6074111226115811Component } from "./components/app-6074111226115811/app-6074111226115811.component";
import { App4134236886734011Component } from "./components/app-4134236886734011/app-4134236886734011.component";
import { App1082645055919775Component } from "./components/app-1082645055919775/app-1082645055919775.component";
import { App2519772675051021Component } from "./components/app-2519772675051021/app-2519772675051021.component";
import { App8412591861809151Component } from "./components/app-8412591861809151/app-8412591861809151.component";

// @ts-ignore
import html from './app-8904675975450195.component.html?raw';
// @ts-ignore
import style from './app-8904675975450195.component.scss?inline';

/**
 * COMPONENT: 'app-8904675975450195'
 */

export const App8904675975450195Component = new Component({
  name: 'app-8904675975450195',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6074111226115811Component,
App4134236886734011Component,
App1082645055919775Component,
App2519772675051021Component,
App8412591861809151Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
