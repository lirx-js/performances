import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2460607526671117Component } from "./components/app-2460607526671117/app-2460607526671117.component";
import { App7180029422912567Component } from "./components/app-7180029422912567/app-7180029422912567.component";
import { App3403121866155957Component } from "./components/app-3403121866155957/app-3403121866155957.component";
import { App3017279365840097Component } from "./components/app-3017279365840097/app-3017279365840097.component";
import { App5521438738312869Component } from "./components/app-5521438738312869/app-5521438738312869.component";

// @ts-ignore
import html from './app-2477811081155229.component.html?raw';
// @ts-ignore
import style from './app-2477811081155229.component.scss?inline';

/**
 * COMPONENT: 'app-2477811081155229'
 */

export const App2477811081155229Component = new Component({
  name: 'app-2477811081155229',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2460607526671117Component,
App7180029422912567Component,
App3403121866155957Component,
App3017279365840097Component,
App5521438738312869Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
